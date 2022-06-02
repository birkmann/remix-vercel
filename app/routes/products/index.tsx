import type { LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async () => {
  return fetch("https://fakestoreapi.com/products").then((response) =>
    response.json()
  );
};

export default function Products() {
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="p-8 max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold">Products</h1>
      <div className="grid lg:grid-cols-2 gap-8">
        {products.map((product: any) => (
          <div key={product.id}>
            <div className="flex  bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="w-1/3 h-64 flex items-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="object-contain h-full w-full p-4"
                />
              </div>
              <div className="w-2/3 p-4">
                <h1 className="text-gray-900 font-bold text-2xl">Backpack</h1>
                <p className="mt-2 text-gray-600 text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit In
                  odit exercitationem fuga id nam quia
                </p>
                <div className="flex item-center mt-2">
                  <svg
                    className="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-700"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                  <svg
                    className="w-5 h-5 fill-current text-gray-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                  </svg>
                </div>
                <div className="flex item-center justify-between mt-3">
                  <h1 className="text-gray-700 font-bold text-xl">$220</h1>
                  <button className="px-3 py-2 bg-gray-800 text-white text-xs font-bold uppercase rounded">
                    Add to Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
