import Image from "next/image";
import ProductsList from "./products-list"
import Team from "./team";
import Product from "./product";
import Error from "./error";
import Login from "./login";

export default function Home() {
  return (
    <div className="1">
      {/* <ProductsList />
      <Team /> */}
      {/* <Product /> */}
      {/* <Error /> */}
      <Login />
    </div>
  );
}
