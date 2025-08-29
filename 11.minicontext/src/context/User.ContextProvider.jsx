import React from "react";
import UserContext from "./User.context.js";
import { useState } from "react";

const UserContextProvider=({children})=>{

    const [User,setUser]=useState(null)

    return (

        <>
        <UserContext.Provider value={{User,setUser}}>

            {children}


        </UserContext.Provider>
        
        
        </>
    )



}

export default UserContextProvider