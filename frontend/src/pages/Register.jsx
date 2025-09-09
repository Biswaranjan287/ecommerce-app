import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { asyncregisteruser } from "../store/actions/userActions";

const Register = () => {

    const { register, reset, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    
    const RegisterHandler = (user) => {
        user.id = nanoid();
        user.isAdmin = false
        user.cart = []
        dispatch(asyncregisteruser(user));
        navigate("/login")
    }

    return (
        <form
            onSubmit={handleSubmit(RegisterHandler)}
            className="flex flex-col w-1/2 justify-start items-start">

            <input
                {...register("username")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="text"
                placeholder="username"
            />
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
            <button className="mt-5 px-4 py-2 rounded bg-blue-500">Register User</button>
            <p className="mt-5">Already have an account?<Link className="text-blue-500" to="/login">Login</Link></p>

        </form>
    )
}

export default Register;