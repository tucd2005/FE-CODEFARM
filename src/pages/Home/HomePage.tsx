import Blog from "../../components/Blog";
import Banner from "./components/Banner";
import MyCategory from "./components/MyCategory";
import MyProduct from "./components/MyProduct";
import OurCategory from "./components/OurCategory";
import Support from "./components/Support";

const HomePage = () => {
  return (
    <>
      <Banner />
      <Support />
      <MyCategory />
      <MyProduct />
      <OurCategory />
      <Blog />
    </>
  );
};

export default HomePage;
