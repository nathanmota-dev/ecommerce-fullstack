import Carousel from "./components/carousel";
import { Navbar } from "./components/navbar";
import NoticeShipping from "./components/noticeShipping";
import ProductCarousel from "./components/productCarousel";

export default function Home() {
  return (
    <div>
      <NoticeShipping />
      <Navbar />
      <Carousel />
      <ProductCarousel />
    </div>
  );
}
