import img_category from "../assets/images/img_category.webp";
import img_category2 from "../assets/images/img_category2.webp";
import img_category3 from "../assets/images/img_category3.webp";
import img_category4 from "../assets/images/img_category4.webp";

const OurCategory = () => {
  return (
    <div>
      <section className="mt-9 lg:mt-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Our Categories</h2>

          <ul className="md:grid grid-cols-4 gap-10 mt-11">
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src={img_category} alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Bathroom</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src={img_category2} alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Chair</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src={img_category3} alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Decor</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src={img_category4} alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Lamp</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default OurCategory;
