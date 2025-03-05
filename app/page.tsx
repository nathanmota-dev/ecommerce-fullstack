import Carousel from "./components/carousel";
import HighlightBanner from "./components/HighlightBanner";
import { Navbar } from "./components/navbar";
import NewProducts from "./components/newProducts";
import NoticeShipping from "./components/noticeShipping";
import ProductCarousel from "./components/productCarousel";
import { SpecialCollections } from "./components/specialCollections";

export default function Home() {
  return (
    <div>
      <NoticeShipping />
      <Navbar />
      <Carousel />
      <ProductCarousel />
      <SpecialCollections />
      <HighlightBanner />
      <NewProducts />      
    </div>
  );
}
