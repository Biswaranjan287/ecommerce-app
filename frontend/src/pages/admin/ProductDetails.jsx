import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { asyncdeleteproduct, asyncupdateproduct } from '../../store/actions/productActions';

const ProductDetails = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector(
    (state) => state)
  const product = products?.find((product) => product.id == id)

  const { register, reset, handleSubmit } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  }) 
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const UpdateProductHandler = (product) => {
    dispatch(asyncupdateproduct(id, product));
  }

  const DeleteHandler = () => {
    dispatch(asyncdeleteproduct(id))
    navigate("/products")
  }

  return product ? (
    <div className='flex bg-rose-100 rounded-2xl'>
      <img className='w-[16vw] h-[40vh] top-0 ml-4 mt-10' src={product.image} alt="" />
      <div className='w-[60vw]  flex items-center px-5 '>
        <div className='w-full h-full py-20 px-5 flex flex-col items-start'>
          <h1 className='text-4xl'>{product.title}</h1>
          <h2 className='mb-5 mt-5 text-2xl text-green-500 font-normal'>{product.price}</h2>
          <p className='mb-5'>{product.description}</p>
          <button
            className='bg-amber-400 px-3 py-1 mt-10 rounded font-normal active:scale-95  hover:bg-amber-500 ease-in-out cursor-pointer'
          >
            Add to cart
          </button>
        </div>
      </div>
      <hr className='m-5' />
      {users && users?.isAdmin &&
        <div className='bg-rose-100 p-10 rounded-2xl'>
          <form
            onSubmit={handleSubmit(UpdateProductHandler)}
            className="flex flex-col w-full justify-center items-center ">
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
              className="outline-none resize-none w-full overflow-auto border-b text-3xl mb-3 p-2"
              placeholder="enter description"
            ></textarea>
            <input
              {...register("category")}
              className="outline-none border-b text-3xl mb-3 p-2"
              type="text"
              placeholder="category"
            />
            <button className="mt-5 px-4 py-2 rounded font-normal bg-blue-300">
              Update Product
            </button>
            <button type='button'
              onClick={DeleteHandler}
              className='mt-5 px-4 py-2 bg-red-400 font-normal rounded'>
              Delete Product
            </button>
          </form>
        </div>
      }

    </div>
  ) : "Loading..."
}

export default ProductDetails;