import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setProducts } from "../store/slices/productSlice";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/products");
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setProducts(products));
  }, [products]);

  return (
    <div>
      <h1>Welcome to the E-commerce Website</h1>
      {/* Diğer bileşenler ve içerikler */}
    </div>
  );
}
