import React from "react";

import Header from "parts/Header";
import Breadcrumb from "components/Breadcrumb/index";

import Sitemap from "parts/Sitemap";
import Footer from "parts/Footer";
import ShopingCart from "parts/CartPage/ShopingCart";
import ShippingDetails from "parts/CartPage/ShippingDetails";

export default function CartPage() {
  return (
    <>
      <Header theme="black" />
      <Breadcrumb
        list={[
          { url: "/", name: "Home" },
          { url: "/categories/1", name: "Shopping Chart" },
        ]}
      />

      <section className="md:py-16">
        <div className="container mx-auto px-4">
          <div className="flex -mx-4 flex-wrap">
            <ShopingCart />
            <ShippingDetails />
          </div>
        </div>
      </section>

      <Sitemap />
      <Footer />
    </>
  );
}
