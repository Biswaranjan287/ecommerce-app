import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

const UnauthWrapper = (props) => {
    const { users } = useSelector((state) => state.userReducer)

    return !users ? props.children : <Navigate to={"/"} />

}

export default UnauthWrapper