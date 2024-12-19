import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl } from "../App";
import { toast } from "react-toastify";

const ListProduct = () => {
  const [product, setProduct] = useState([]);

  const viewProducts = async () => {
    try {
      const { data } = await axios.get(`${backendUrl}/product/view`);
      if (data.success == true) {
        setProduct(data.product);
      } else {
        toast.error(data.msg);
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(product);

  useEffect(() => {
    viewProducts();
  }, []);
  return (
    <>
      <p className="mb-2">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* List Table Titile */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product list  */}
        {product.reverse().map((list, index) => (
          <div
            className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <img className="w-12" src={list.image} alt="" />
            <p>{list.name}</p>
            <p>{list.category}</p>
            <p>₹{list.price}</p>
            <p className="text-right md:text-center text-lg">X</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListProduct;
