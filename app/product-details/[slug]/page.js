// import PageBanner from "@/components/PageBanner";
import Layout from "@/layouts/Layout";
// import { reletedProductSlider } from "@/sliderProps";
// import Link from "next/link";
// import { Nav, Tab } from "react-bootstrap";
// import Slider from "react-slick";
import { products } from "../../products";
// import { useEffect, useState } from "react";
import ProductDetailsClient from "@/components/ProductDetailsClient";

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

const ProductDetails = ({ params }) => {
  const { slug } = params;
  const item = products.find((item) => item.slug === slug);

  return (
    <Layout>
      <ProductDetailsClient item={item} />
    </Layout>
  );
};
export default ProductDetails;
