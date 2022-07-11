export const LoginStart = (user) => ({
    type: "LOGIN_START",
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload:user,                //payloadはなんでもいいけど一般的にpayloadと記述される
});

export const LoginError = (error) => ({
    type: "LOGIN_ERROR",
    payload:error,
});