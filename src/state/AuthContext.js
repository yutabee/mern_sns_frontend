import { createContext, useReducer } from "react";
import { AuthReducer } from "./AuthReducer";

//最初のユーザー状態を管理
const initialState = {
    // user: null,
    user: {
        _id:"62c41b1985dccbf023a2c219",
        username:"Yuuutabee",
        email:"example@example.com",
        password:"password",
        profilePicture:"/person/1.jpeg",
        coverPicture:"",
        followers: Array,
        followings:Array,
        isAdmin:false,
    },
    isFetching: false,
    error: false,  
};

//状態をグローバルに管理する
export const AuthContext = createContext(initialState);

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);   //reducerは古いstateを新しいstateに変更する
    return (
        <AuthContext.Provider
             value={{
                user: state.user,
                isFetching: state.isFetching,
                error: state.error,
                dispatch,
            }}
        >  {/* createContextの中で利用できる */}
            {children}    {/* このプロバイダーで囲まれるchildrenはこのvalueを全て利用することができる */}
        </AuthContext.Provider>
    );
};