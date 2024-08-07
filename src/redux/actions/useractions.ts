const setUser = (userObj: any) => {
    return {
        type: "SET_USER",
        payload: userObj,
    };

};
const getUser = () => {
    return {
        type: "GET_USER",
    };
};

export {setUser, getUser};