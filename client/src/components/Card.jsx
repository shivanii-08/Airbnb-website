import { Link } from "react-router-dom";
import products from "../data/CardData";
import CardCarousel from "../utils/CardCarousel";
import { useState } from "react";

export default function Card() {
  const [like, setLike] = useState();
  
  return (
    <div className="bg-white">
      <div className="mx-auto mt-4 px-4 sm:px-6 lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-x-3 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-4">
          {products?.map((product) => (
            <div key={product.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-2xl bg-gray-200 lg:aspect-none lg:h-80 relative">
                <CardCarousel imgUrl={product?.imgURL} id={product?.id} />
                {product.isGuestFav ? (
                  <div className="bg-white text-gray-700 mt-5 absolute top-2 left-2  z-50 text-sm px-4 py-1.5 rounded-2xl shadow-lg">
                    Guest Favourite
                  </div>
                ) : null}

                <div onClick={()=>setLike(!like)} className={`${like?"bg-red-500 text-white":"bg-white text-gray-700"} p-1 rounded-full absolute top-3 right-5 z-50 shadow-lg`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6 border-white"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <p>
                      <span aria-hidden="true" className="" />
                      {product?.name}
                    </p>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">
                    {product.discription}
                  </p>
                  <p className="text-sm font-medium text-gray-600">
                    {product?.date}{" "}
                  </p>
                </div>
              </div>
              <p className="text-sm font-medium text-gray-600">
                <span className="font-semibold text-gray-900">
                  ₹ {product.price}
                </span>{" "}
                night
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
