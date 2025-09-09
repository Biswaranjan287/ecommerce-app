import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom"

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex font-medium  bg-blue-200 justify-center items-center mb-10 gap-x-5 p-5">
      <NavLink
        className={({ isActive }) =>
          `relative transition-colors duration-300 
      ${isActive ? "text-gray-900 font-semibold" : " hover:text-gray-800"}
      after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[1.5px] 
      after:w-full after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`
        }
        to={"/"}>Home</NavLink>
      {user ? <>
        {user && user?.isAdmin && (<NavLink to={"/admin/create-product"}>Create Product</NavLink>)}

        <NavLink
            className={({ isActive }) =>
          `relative transition-colors duration-300 
      ${isActive ? "text-gray-900 font-semibold" : " hover:text-gray-800"}
      after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[1.5px] 
      after:w-full after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`
        }
          to={"/admin/user-profile"}>Settings</NavLink>
        <NavLink
            className={({ isActive }) =>
          `relative transition-colors duration-300 
      ${isActive ? "text-gray-900 font-semibold" : " hover:text-gray-800"}
      after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[1.5px] 
      after:w-full after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`
        }
          to={"/cart"}>Cart</NavLink>

      </> : <>
        <NavLink
            className={({ isActive }) =>
          `relative transition-colors duration-300 
      ${isActive ? "text-gray-900 font-semibold" : " hover:text-gray-800"}
      after:content-[''] after:absolute after:left-0 after:-bottom-0 after:h-[1.5px] 
      after:w-full after:scale-x-0 after:bg-gray-700 after:transition-transform after:duration-300 
      ${isActive ? "after:scale-x-100" : "hover:after:scale-x-100"}`
        }
          to={"/login"}>Login</NavLink>
      </>}
    </nav>
  )
}

export default Nav