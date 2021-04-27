// 在nextjs裡，這樣命名可以當作 localhost:3000/change-password?token=qwdqw
import { Box, Button, Link } from "@chakra-ui/react";
import { Formik, Form } from "formik";
import { NextPage } from "next";
import { withUrqlClient } from "next-urql";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { InputField } from "../../components/InputField";
import { Wrapper } from "../../components/Wrapper";
import { useChangePasswordMutation } from "../../generated/graphql";
import { createUrqlClient } from "../../utils/createUrqlClient";
import { toErrorMap } from "../../utils/toErrorMap";
import NextLink from "next/link";

// export const ChangePassword: NextPage<{ token: string }> = ({ token }) => { //後來示範，用router就可以得到token，alternative
export const ChangePassword: NextPage = () => {
    const [, changePassword] = useChangePasswordMutation();
    const [tokenError, setTokenError] = useState("");
    const router = useRouter();
    return (
        <Wrapper>
            <Formik
                initialValues={{ newPassword: "" }}
                onSubmit={async (values, { setErrors }) => {
                    const response = await changePassword({
                        newPassword: values.newPassword,
                        token:
                            typeof router.query.token === "string"
                                ? router.query.token
                                : "",
                    });
                    if (response.data?.changePassword.errors) {
                        const errorMap = toErrorMap(
                            response.data.changePassword.errors
                        );
                        if ("token" in errorMap) {
                            setTokenError(errorMap.token);
                        }
                        setErrors(errorMap);
                    } else if (response.data?.changePassword.user) {
                        router.push("/");
                    }
                }}
            >
                {({ isSubmitting }) => (
                    <Form>
                        <InputField
                            name="newPassword"
                            placeholder="new password"
                            label="New Password"
                            type="password"
                        />
                        {tokenError ? (
                            <Box>
                                <Box style={{ color: "red" }}>{tokenError}</Box>
                                <NextLink href="/forget-password">
                                    <Link mr={2}>
                                        click here to get a new one
                                    </Link>
                                </NextLink>
                            </Box>
                        ) : null}
                        <Button
                            mt={4}
                            type="submit"
                            color="teal"
                            isLoading={isSubmitting}
                        >
                            Change Password
                        </Button>
                    </Form>
                )}
            </Formik>
        </Wrapper>
    );
};

// ChangePassword.getInitialProps = ({ query }) => {
//     return {
//         token: query.token as string,
//     };
// }; 在這個情境，用router.query比較好，因為getInitialProps是在要用ssr時才要另外宣告，這頁沒有這個需求

export default withUrqlClient(createUrqlClient)(ChangePassword);
