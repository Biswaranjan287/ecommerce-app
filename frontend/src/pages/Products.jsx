import { lazy, Suspense, useEffect } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';
import useInfiniteProducts from "../utils/useInfiniteProducts";

const ProductTemplate = lazy(() => import("../components/ProductTemplate"));

const Products = () => {

  const {products, hasMore, fetchproducts} = useInfiniteProducts()
  
  return (
    <InfiniteScroll

      dataLength={products.length}
      next={fetchproducts}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    >
      <div className=" flex flex-wrap">

        {products.map((product) => (
          <Suspense
            key={product.id}
            fallback={<h1 className="text-center text-5xl text-yellow-500">LOADING...</h1>}>
            <ProductTemplate product={product} /></Suspense>))}


      </div>
    </InfiniteScroll>

  )

}

export default Products;