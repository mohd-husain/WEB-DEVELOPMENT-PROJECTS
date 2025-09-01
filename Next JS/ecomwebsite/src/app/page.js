import Image from "next/image";
import HomeBanner from "./components/HomeBanner";
import HomeProducts from "./components/HomeProducts";
import HomeBanner2 from "./components/HomeBanner2";
import BestSellingProducts from "./components/BestSellingProducts";

export default function Home() {
  return (
    <div>
      <HomeBanner/>
      <HomeProducts/>
      <HomeBanner2/>
      <BestSellingProducts/>
    </div>
  );
}
