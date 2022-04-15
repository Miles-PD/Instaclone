import { useState, useEffect, useContext } from "react";
import UserContext from "../context/user";
import { getUserByUserId } from "../services/firebase";

export default function useUser() {
    const [activeUser, setActiveUser] = useState({})
    const {user} = useContext(UserContext)


useEffect(() => {
    async function getUserObjByUserId() {
        // need function to call that gets user data based on id
        const [response] = await getUserByUserId(user.uid)
        setActiveUser(response)
    }

    if (user?.id) {
        getUserObjByUserId()
    }

}, [user])

    return {user: activeUser }

}