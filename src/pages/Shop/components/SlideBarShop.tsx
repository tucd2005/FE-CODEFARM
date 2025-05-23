import React from "react";

const SlideBarShop = () => {
  return (
    <>
      <div className="col-span-1 p-0 lg:p-4">
        <div className="">
          <h2 className="text-lg font-semibold">Category</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="#none"
                className="font-medium text-black text-sm hover:text-black transition-all"
              >
                Bathroom (6)
              </a>
            </li>
            <li>
              <a
                href="#none"
                className="font-medium text-lightGray text-sm hover:text-black transition-all"
              >
                Chair (7)
              </a>
            </li>
            <li>
              <a
                href="#none"
                className="font-medium text-lightGray text-sm hover:text-black transition-all"
              >
                Decor (17)
              </a>
            </li>
            <li>
              <a
                href="#none"
                className="font-medium text-lightGray text-sm hover:text-black transition-all"
              >
                Lamp (3)
              </a>
            </li>
            <li>
              <a
                href="#none"
                className="font-medium text-lightGray text-sm hover:text-black transition-all"
              >
                Table (9)
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-5">
          <h2 className="text-lg font-semibold">Availability</h2>
          <ul className="mt-4 space-y-3">
            <li>
              <a
                href="#none"
                className="font-medium text-black text-sm hover:text-black transition-all"
              >
                In stock (16)
              </a>
            </li>
            <li>
              <a
                href="#none"
                className="font-medium text-lightGray text-sm hover:text-black transition-all"
              >
                Out of stock (1)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SlideBarShop;
