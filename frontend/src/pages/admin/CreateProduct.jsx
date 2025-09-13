import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { asynccreateproduct } from '../../store/actions/productActions'

const CreateProduct = () => {
    const { register, reset, handleSubmit } = useForm()
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const CreateProductHandler = (product) => {
        product.id = nanoid();
        console.log(product)
        dispatch(asynccreateproduct(product));
        navigate("/products")
    }

    return (
        <div className='flex justify-center'>
            <form
            onSubmit={handleSubmit(CreateProductHandler)}
            className="flex justify-between bg-rose-100 flex-col w-1/2 h-[70vh] p-10 rounded-2xl">
            <input
                {...register("image")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="url"
                placeholder="image url"
            />
            <input
                {...register("title")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="text"
                placeholder="title"
            />
            <input
                {...register("price")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="number"
                placeholder="price"
            />
            <textarea
                {...register("description")}
                className="outline-none border-b text-3xl mb-3 p-2"
                placeholder="enter description"
            ></textarea>
            <input
                {...register("category")}
                className="outline-none border-b text-3xl mb-3 p-2"
                type="text"
                placeholder="category"
            />
            <button className="mt-5 px-4 py-2 rounded bg-blue-500">Create Product</button>
        </form>
        </div>
    )
}

export default CreateProduct