import { useEffect } from "react"
import Nav from "./components/Nav"
import Mainroutes from "./routes/Mainroutes"
import { asynccurrentuser } from "./store/actions/userActions"
import { useDispatch, useSelector } from "react-redux"
// import { asyncloadproducts } from "./store/actions/productActions"

const App = () => {

  const dispatch = useDispatch()
  const {users} = useSelector((state) => state.userReducer)
  // const {products} = useSelector((state) => state.productReducer)

  useEffect(() => {
    !users && dispatch(asynccurrentuser())
  }, [users])

  //   useEffect(() => {
  //   products.length == 0 && dispatch(asyncloadproducts())
  // }, [products])

  return (
    <div className="px-[5%] text-black font-thin w-screen bg-white">
      <Nav />
      <Mainroutes />
    </div>
  )
}

export default App