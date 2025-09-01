import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { bannerAPI } from "../api-services/homeServices";
import HomeBanner from "../components/home/HomeBanner";
import HomeCollection from "../components/home/HomeCollection";
import HomeProduct from "../components/home/HomeProduct";

export const metadata = {
  title: "Home Page",
  description: "Home Page Description",
};


export default async function Home() {

  let bannerData = await bannerAPI()
  console.log(bannerData);
  
  metadata.title="Home Page Dynamic Data"

  return (
    <>
      <HomeBanner bannerData={bannerData}/>
      <HomeCollection/>
      <HomeProduct/>
    </>
  );
}
