import React from "react";
import MainBanner from "../components/MainBanner";
import Categories from "../components/Categories";
import BestSeller from "../components/BestSeller";
import BottomBanner from "../components/BottomBanner";
import NewsLatter from "../components/NewsLatter";

function Home() {
  return (
    <div className="mt-10">
      <MainBanner />
      <Categories />
      <BestSeller />
      <BottomBanner />
      <NewsLatter />
    </div>
  );
}

export default Home;
