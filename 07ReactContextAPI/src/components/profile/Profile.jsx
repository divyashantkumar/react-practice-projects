import { useContext } from "react"
import UserContext from "../../context/UserContext"


function Profile() {

    const { user } = useContext(UserContext);

    if (!user) return <h1>Not logged In!!!</h1>;

    return (
        <div>
            <h1>username: {user.username}</h1>
            <h2>password: {user.password}</h2>
        </div>
    )
}

export default Profile