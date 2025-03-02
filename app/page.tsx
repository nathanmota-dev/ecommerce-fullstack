import Carousel from "./components/carousel";
import { Navbar } from "./components/navbar";
import NoticeShipping from "./components/noticeShipping";

export default function Home() {
  return (
    <div>
      <NoticeShipping />
      <Navbar />
      <Carousel />
    </div>
  );
}
