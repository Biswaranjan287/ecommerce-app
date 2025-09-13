import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asyncdeleteuser, asynclogoutuser, asyncupdateuser } from "../../store/actions/userActions";

const UserProfile = () => {
  const { users } = useSelector((state) => state.userReducer)

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  })
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const UpdateUserHandler = (user) => {
    dispatch(asyncupdateuser(users.id, user));
  }

  const LogoutUserHandler = () => {
    dispatch(asynclogoutuser())
    navigate("/login")
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteuser(users.id))
    navigate("/login")
  }

  return users ? (
    <div>
      
      <div className="w-flull flex justify-center items-center">
        <form
        onSubmit={handleSubmit(UpdateUserHandler)}
        className="flex flex-col bg-rose-100 p-20 rounded-2xl">
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
        <button className="mt-5 px-4 py-2 rounded font-normal bg-blue-300">
          Update User
        </button>

        <button type='button'
          onClick={LogoutUserHandler}
          className='mt-5 px-4 py-2 font-normal bg-orange-300 rounded'>
          Logout User
        </button>

        <button type='button'
          onClick={DeleteHandler}
          className='mt-5 px-4 py-2 font-normal bg-red-400 rounded'>
          Delete User
        </button>
      </form>
      </div>
      <hr className="my-5"/>
      <h1 className="font-thin text-5xl text-gray-500">{users.username}</h1>
      <h1 className="font-thin text-xl text-gray-500">{users.email}</h1>
    </div>
  ) : "Loading..."
}

export default UserProfile