import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { Link, useNavigate } from "react-router-dom";
import { asyncloginuser } from "../store/actions/userActions";
import { useDispatch } from "react-redux";

const Login = () => {

    const {register, reset, handleSubmit}=useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const LoginHandler = (user) =>{
        user.id = nanoid()
        dispatch(asyncloginuser(user))
    }
    
    return (
        <form 
        onSubmit={handleSubmit(LoginHandler)}
        className="flex flex-col w-1/2 justify-start items-start">

            
            <input
                {...register("email")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="email"
                placeholder="email"
            />
            <input
                {...register("password")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="password"
                placeholder="password"
            />
            <button className="mt-5 px-4 py-2 rounded bg-blue-500">Login User</button>
            <p className="mt-5">Don't have an account?<Link className="text-blue-500" to="/register">Register</Link></p>
            
        </form>
    )
}

export default Login