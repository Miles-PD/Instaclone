import { useContext } from "react"
import FirebaseContext from "../context/firebase"
import UserContext from "../context/user"
import * as ROUTES from '../constants/routes'

export default function Header() {


    const { firebase } = useContext(FirebaseContext)
    const { user } = useContext(UserContext)

    return (
        <p>Header</p>
    )
}