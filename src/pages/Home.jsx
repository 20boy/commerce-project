import { Annoucements } from "../components/Annoucements";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import { Navbar } from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Products from "../components/Products";

import Slider from "../components/Slider";

export default function Home() {
  return (
    <div>
      <Annoucements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </div>
  );
}
