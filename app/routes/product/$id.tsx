import type { LoaderFunction } from "@remix-run/node"; // or "@remix-run/cloudflare"
import { useLoaderData } from "@remix-run/react";

export const loader: LoaderFunction = async ({ params }) => {
  return fetch("https://fakestoreapi.com/products/" + params.id).then(
    (response) => response.json()
  );
};

export default function Products() {
  const product = useLoaderData();
  console.log(product);
  return (
    <div>
      <h1> {product.title}</h1>
      <img src={product.image} alt={product.title} />
    </div>
  );
}
