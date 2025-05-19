import Headers from "../components/Headers";

import Banner from "../components/Banner";
import Support from "../components/Support";
import MyCategory from "../components/MyCategory";
import MyProduct from "../components/MyProduct";
import Footers from "../components/Footers";
import OurCategory from "../components/OurCategory";
import Blog from "../components/Blog";

const HomePage = () => {
  return (
    <div>
      <Headers />
      <main>
        <Banner />
        <Support />
        <MyCategory />
        <MyProduct />
        <OurCategory />
        <Blog />
      </main>
      <Footers />
    </div>
  );
};

export default HomePage;
