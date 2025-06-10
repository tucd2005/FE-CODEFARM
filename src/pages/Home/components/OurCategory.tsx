

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
                  <img className="image" src="public/images/newban1.jpg" alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Bathroom</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src="public/images/newban2.jpg" alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Chair</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src="public/images/newban3.jpg" alt="" />
                </div>
                <h3 className="mt-4 font-semibold">Decor</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src="public/images/newban4.jpg" alt="" />
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
