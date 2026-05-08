import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/frontend_assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productsData, setProductsData] = useState(false);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  const fetchProductData = async (params) => {
    products.map((item) => {
      if (item._id === productId) {
        setProductsData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  return productsData ? (
    <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
      {/* -----------product Data----------- */}
      <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
        {/*------------- Product Images are rendering here----------- */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal  sm:w-[18.7%] w-full">
            {productsData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className="w-[80%]
                sm:w-full
                sm:mb-3
                flex-shrink-0
                cursor-pointer"
                alt=""
              />
            ))}
          </div>
          <div className="w-full sm:w-[80%]">
            <img className="w-full h-auto" src={image} alt="" />
          </div>
        </div>
        {/*---------- Product Description-------- */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">{productsData.name}</h1>
          <div className="flex items-center gap-1 mt-2">
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className="pl-2">(122)</p>
          </div>
          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productsData.price}{" "}
          </p>
          <p className="mt-5 text-gray-500 md w:4/5">
            {" "}
            {productsData.description}{" "}
          </p>
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productsData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${item == size ? "border-red-500 bg-orange-400 text-white" : ""}`}
                  key={index}
                >
                  {item}{" "}
                </button>
              ))}
            </div>
          </div>
          <button
            onClick={() => addToCart(productsData._id, size)}
            className="bg-black text-white px-8 py-3 text-sm active:bg-orange-400"
          >
            ADD TO CART
          </button>
          <hr className="mt-8 sm:w-4/5 " />
          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product</p>
            <p>Cash on delivery is available for this product.</p>
            <p>Easy return and exchange policy within 7 days</p>
          </div>
        </div>
      </div>
      {/* ----------------------Descriptions and Reviews Sections------------------- */}
      <div className="mt-20">
        <div className="flex">
          <b className="border px-5 py-3 text-sm">Description</b>
          <p className="border px-5 py-3 text-sm">Reviews(122) </p>
        </div>
        <div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, amet libero? Ratione non aut maxime distinctio omnis.
            Adipisci molestias architecto tenetur voluptates culpa facilis
            cupiditate incidunt aliquam, et cumque dolore rerum molestiae odit
            distinctio facere quasi omnis, itaque aut voluptate iure veritatis
            nemo atque. Doloremque a necessitatibus commodi non debitis.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
            adipisci accusantium dolor vitae! Hic fugit ipsa veritatis, quam
            accusamus sequi.
          </p>
        </div>
      </div>
      {/* ---------Display Related Products--------- */}
      <RelatedProducts
        category={productsData.category}
        subCategory={productsData.subCategory}
      />
    </div>
  ) : (
    <div className="opacity-0"></div>
  );
};

export default Product;
