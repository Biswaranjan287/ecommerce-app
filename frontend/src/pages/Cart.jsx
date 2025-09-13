import { useDispatch, useSelector } from "react-redux"
import { asyncupdateuser } from "../store/actions/userActions"

const Cart = () => {
    const dispatch = useDispatch()

    const users = useSelector((state) => state.userReducer.users)
    const products = useSelector((state) => state.productReducer.products)

    const IncreaseQantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] }

        copyuser.cart[index] = {
            ...copyuser.cart[index],
            quantity: copyuser.cart[index].quantity + 1,
        }
        console.log(copyuser)
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }


    const DecreaseQantityHandler = (index, product) => {
        const copyuser = { ...users, cart: [...users.cart] }

        if (users.cart[index].quantity > 0) {
            copyuser.cart[index] = {
                ...copyuser.cart[index],
                quantity: copyuser.cart[index].quantity - 1,
            }
        } else {
            copyuser.cart.splice(index, 1)
        }
        console.log(copyuser)
        dispatch(asyncupdateuser(copyuser.id, copyuser))
    }


    const cartItems = users.cart.map((c, index) => {
        return (
            <div className="flex justify-center">
                <li className="flex w-[80vw] bg-rose-100 font-normal items-center justify-between mb-10 p-3 rounded-2xl" key={c.product.id}>
                    <img
                        className="mr-10 w-[10vmax] h-full  "
                        src={c.product.image} alt=""
                    />
                    <span className="text-2xl">{c.product.title}</span>
                    <span className="text-2xl text-green-600">{c.product.price}</span>
                    <p>
                        <button onClick={() => DecreaseQantityHandler(index, c)} className="text-2xl">-</button>
                        <span className="mx-3 px-3 py-[4px] font-medium rounded">{c.quantity}</span>
                        <button onClick={() => IncreaseQantityHandler(index, c)} className="text-lg">+</button>
                    </p>
                </li>
            </div>
        )
    })

    return (
        <ul>{cartItems}</ul>
    )
}

export default Cart