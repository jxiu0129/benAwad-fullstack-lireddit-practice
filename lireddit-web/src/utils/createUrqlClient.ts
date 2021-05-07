import {
    dedupExchange,
    Exchange,
    fetchExchange,
    stringifyVariables,
} from "urql";
import { cacheExchange, Resolver } from "@urql/exchange-graphcache";
import {
    LogoutMutation,
    MeQuery,
    MeDocument,
    LoginMutation,
    RegisterMutation,
} from "../generated/graphql";
import { betterUpdateQuery } from "./betterUpdateQuery";
import { pipe, tap } from "wonka";
import Router from "next/router"; // 因為不在react裡，所以不用hook

const errorExchange: Exchange = ({ forward }) => (ops$) => {
    return pipe(
        forward(ops$),
        tap(({ error }) => {
            // if the operationResult has an error send a req to sentry
            // the error is a combinedError with networkError and graphqlErrors properties
            if (error?.message.includes("not authenticated")) {
                Router.replace("/login");
            }
        })
    );
};

const cursorPagination = (): Resolver => {
    return (_parent, fieldArgs, cache, info) => {
        const { parentKey: entityKey, fieldName } = info;
        const allFields = cache.inspectFields(entityKey);
        console.log(`allFields: ${allFields}`);
        const fieldInfos = allFields.filter(
            (info) => info.fieldName === fieldName
        );
        const size = fieldInfos.length;
        if (size === 0) {
            return undefined;
        }

        const fieldKey = `${fieldName}(${stringifyVariables(fieldArgs)})`;
        const isItInTheCache = cache.resolve(
            cache.resolveFieldByKey(entityKey, fieldKey) as string,
            "posts"
        ); //ben是用這個
        // const isItInTheCache = cache.resolve(entityKey, fieldName);
        info.partial = !isItInTheCache;

        let hasMore = true;
        const results: string[] = [];
        fieldInfos.forEach((fi) => {
            // const data = cache.resolveFieldByKey(
            //     entityKey,
            //     fi.fieldKey
            // ) as string[];
            const key = cache.resolveFieldByKey(
                entityKey,
                fi.fieldKey
            ) as string;
            const data = cache.resolve(key, "posts") as string[];
            const _hasMore = cache.resolve(key, "hasMore");
            if (!_hasMore) {
                hasMore = _hasMore as boolean;
            }
            //// const data = cache.resolve(entityKey, fi.fieldName) as string[];
            results.push(...data);
        });

        return {
            __typename: "PaginatedPosts",
            hasMore,
            posts: results,
        };

        //   const visited = new Set();
        //   let result: NullArray<string> = [];
        //   let prevOffset: number | null = null;

        //   for (let i = 0; i < size; i++) {
        //     const { fieldKey, arguments: args } = fieldInfos[i];
        //     if (args === null || !compareArgs(fieldArgs, args)) {
        //       continue;
        //     }

        //     const links = cache.resolve(entityKey, fieldKey) as string[];
        //     const currentOffset = args[offsetArgument];

        //     if (
        //       links === null ||
        //       links.length === 0 ||
        //       typeof currentOffset !== 'number'
        //     ) {
        //       continue;
        //     }

        //     const tempResult: NullArray<string> = [];

        //     for (let j = 0; j < links.length; j++) {
        //       const link = links[j];
        //       if (visited.has(link)) continue;
        //       tempResult.push(link);
        //       visited.add(link);
        //     }

        //     if (
        //       (!prevOffset || currentOffset > prevOffset) ===
        //       (mergeMode === 'after')
        //     ) {
        //       result = [...result, ...tempResult];
        //     } else {
        //       result = [...tempResult, ...result];
        //     }

        //     prevOffset = currentOffset;
        //   }

        //   const hasCurrentPage = cache.resolve(entityKey, fieldName, fieldArgs);
        //   if (hasCurrentPage) {
        //     return result;
        //   } else if (!(info as any).store.schema) {
        //     return undefined;
        //   } else {
        //     info.partial = true;
        //     return result;
        //   }
    };
};

export const createUrqlClient = (ssrExchange: any) => ({
    url: "http://localhost:4000/graphql",
    fetchOptions: {
        credentials: "include" as const, // 這樣才會有cookie
    },
    // 3:26:21開始看不懂= =
    exchanges: [
        dedupExchange,
        cacheExchange({
            keys: {
                PaginatedPosts: () => null,
            },
            resolvers: {
                Query: {
                    posts: cursorPagination(),
                },
            },
            updates: {
                Mutation: {
                    logout: (_result, args, cache, info) => {
                        betterUpdateQuery<LogoutMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            (result, query) => ({ me: null })
                        );
                    },
                    login: (_result, args, cache, info) => {
                        // cache.updateQuery({ query: MeDocument }, (data: MeQuery) => {})
                        betterUpdateQuery<LoginMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            (result, query) => {
                                if (result.login.errors) {
                                    return query;
                                } else {
                                    return { me: result.login.user };
                                }
                            }
                        );
                    },
                    register: (_result, args, cache, info) => {
                        // cache.updateQuery({ query: MeDocument }, (data: MeQuery) => {})
                        betterUpdateQuery<RegisterMutation, MeQuery>(
                            cache,
                            { query: MeDocument },
                            _result,
                            (result, query) => {
                                if (result.register.errors) {
                                    return query;
                                } else {
                                    return { me: result.register.user };
                                }
                            }
                        );
                    },
                },
            },
        }),
        errorExchange,
        ssrExchange,
        fetchExchange,
    ],
});
