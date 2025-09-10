import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/user.context'
function Profile() {


    const {user}=useContext(UserContext)


   
    if (!user) {
  // Your code here

            return(
                <div>
                    <h1>please login </h1>
                </div>
            )
        }

        return(

            <>
            <h1>Welcome {user.username}</h1>
            
            </>
        )


      
    
  
}

export default Profile
