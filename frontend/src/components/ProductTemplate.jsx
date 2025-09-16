import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { asyncupdateuser } from "../store/actions/userActions";

const ProductTemplate = ({ product }) => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.userReducer.users)

    const AddtoCartHandler = (product) => {
        const copyuser = { ...users, cart: [...users.cart] }
        const x = copyuser.cart.findIndex((c) => c?.product?.id == product.id)
        if (x == -1) {
            copyuser.cart.push({ product, quantity: 1 })
        } else {
            copyuser.cart[x] = {
                product,
                quantity: copyuser.cart[x].quantity + 1,
            }
        }
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }
    return (
        <div className="flex flex-col w-[200px] mr-5 mb-10 shadow rounded overflow-hidden group" key={product.id} >
            <img className="w-full p-3 h-[30vh] rounded-md transition-transform duration-300 group-hover:scale-110" src={product.image} alt="" />
            <h1 className="text-xl font-normal">{product.title}</h1>
            <small>{product.description.slice(0, 100)}..</small>
            <div className="mt-2 flex justify-between items-center mb-0 p-3">
                <p className="font-bold text-green-600">{product.price}$</p>
                <button 
                className='bg-amber-400 px-3 py-1 rounded font-normal active:scale-95  hover:bg-amber-500 ease-in-out cursor-pointer'
                onClick={() => AddtoCartHandler(product)}>Add to cart</button>
            </div>
            <Link
                className="block m-auto w-1/2 text-blue-700 font-normal mb-0"
                to={`/product/${product.id}`}
            > More Info
            </Link>
        </div >
    )
}

export default ProductTemplate