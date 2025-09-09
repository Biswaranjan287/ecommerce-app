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
        <div className="w-[30%] mr-5 mb-5 border shadow" key={product.id} >
            <img className="w-full h-[50vh] object-cover" src={product.image} alt="" />
            <h1>{product.title}</h1>
            <small>{product.description.slice(0, 100)}..</small>
            <div className="mt-3 flex justify-between items-center p-3">
                <p>{product.price}</p>
                <button onClick={() => AddtoCartHandler(product)}>Add to cart</button>
            </div>
            <Link
                className="block m-auto w-1/2"
                to={`/product/${product.id}`}
            > More Info
            </Link>
        </div >
    )
}

export default ProductTemplate