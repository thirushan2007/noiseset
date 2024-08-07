const logOut = (userObj: any) => {
    return {
        type: "LOG_OUT_USER",
        payload: userObj,
    };
};
export default logOut;