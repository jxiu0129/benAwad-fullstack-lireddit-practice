import {
    Box,
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
} from "@chakra-ui/react";
import { withUrqlClient } from "next-urql";
import React from "react";
import { Layout } from "../components/Layout";
import { NavBar } from "../components/NavBar";
import { usePostsQuery } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";
import NextLink from "next/link";

const Index = () => {
    const [{ data, fetching }] = usePostsQuery({ variables: { limit: 10 } });

    if (!data && !fetching) {
        return <div>you got no posts for some reason</div>;
    }

    return (
        <Layout>
            <Flex align="center">
                <Heading>LiReddit</Heading>
                <NextLink href="/create-post">
                    <Link ml={"auto"}>create post</Link>
                </NextLink>
            </Flex>
            <br />
            {!data && fetching ? (
                <div>Loading...</div>
            ) : (
                <Stack spacing={8}>
                    {/* 加驚嘆號跟ts說，我們很肯定這個值不為null */}
                    {data!.posts.map((p) => (
                        <Box key={p.id} p={5} shadow="md" borderWidth="1px">
                            <Heading fontSize="xl">{p.title}</Heading>
                            <Text mt={4}>{p.textSnippet}</Text>
                        </Box>
                    ))}
                </Stack>
            )}
            {data ? (
                <Flex>
                    <Button isLoading={fetching} m="auto" my={4}>
                        Load more
                    </Button>
                </Flex>
            ) : null}
        </Layout>
    );
};

export default withUrqlClient(createUrqlClient, { ssr: true })(Index); // ssr true會開啟SSR，不開就沒事
