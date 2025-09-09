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
    <>
      <div className='w-full flex'>
        <img className='w-1/2 h-1/2 object-cover' src={product.image} alt="" />
        <div className='w-1/2 h-1/2 px-5'>
          <h1 className='text-4xl'>{product.title}</h1>
          <h2 className='mb-5 text-2xl text-green-400'>{product.price}</h2>
          <p className='mb-5'>{product.description}</p>
          <button>Add to cart</button>
        </div>
      </div>
      <hr />
      {users && users?.isAdmin &&
        <form
          onSubmit={handleSubmit(UpdateProductHandler)}
          className="flex flex-col w-full justify-start items-start">
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
          <button className="mt-5 px-4 py-2 rounded bg-blue-500">
            Update Product
          </button>
          <button type='button'
            onClick={DeleteHandler}
            className='mt-5 px-4 py-2 bg-red-500 rounded'>
            Delete Product
          </button>
        </form>
      }

    </>
  ) : "Loading..."
}

export default ProductDetails;