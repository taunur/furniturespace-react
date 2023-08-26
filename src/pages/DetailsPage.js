import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/index";

import ProductDetails from "parts/DetailsPage/ProductDetails";
import Suggestion from "parts/DetailsPage/Suggestion";
import Client from "parts/Client";
import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";

export default function DetailPage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1", name: "Office Room" },
          { url: "/categories/1/products/1", name: "Details" },
        ]}
      />
      <ProductDetails />
      <Suggestion />
      <Client />
      <Sitemap />
      <Footer />
    </>
  );
}
