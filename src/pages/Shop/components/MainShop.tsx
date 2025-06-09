
import ico_star_active from "../../../assets/images/ico_star_active.png";
import ico_star_gray from "../../../assets/images/ico_star_gray.png";
import ico_heart from "../../../assets/images/ico_heart.png";
import ico_reload from "../../../assets/images/ico_reload.png";
import ico_search from "../../../assets/images/ico_search.png";
import SlideBarShop from "./SlideBarShop";

const MainShop = () => {
  return (
    <>
      <section className="pt-12 pb-12">
        <div className="container">
          <div className="lg:grid grid-cols-5">
            <SlideBarShop />
            <div className="col-span-4 mt-6 lg:mt-0">
              <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
                <select name="" id="" className="w-full text-sm">
                  <option value="1">Price, low to hight</option>
                  <option value="2">Price, hight to low</option>
                  <option value="3">Date, old to new</option>
                  <option value="4">Date, new to old</option>
                  <option value="5">Best selling</option>
                </select>
              </div>

              <ul className="lg:grid grid-cols-3 gap-5 mt-9 space-y-3 lg:space-y-0">
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html" className="bg-red">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                      Out of stock
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>

                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                         src="public/images/sneaker1.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Egg Dining Table</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$70.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                    src="public/images/sneaker2.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Century Starburst Clock</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$55.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="public/images/sneaker9.jpg"
                        alt=""
                      />
                    </div>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$59.00</span> -
                          <span className="">$60.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                      -30%
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                  src="public/images/sneaker3.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Caravaggio Read Wall Light</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="line-through text-lightGray">
                            $59.00{" "}
                          </span>{" "}
                          -<span className="text-red-600">$60.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html" className="bg-red">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                      Out of stock
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>

                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
            src="public/images/sneaker4.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Egg Dining Table</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$70.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                     src="public/images/sneaker5.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Century Starburst Clock</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$55.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                   src="public/images/sneaker6.jpg"
                        alt=""
                      />
                    </div>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$59.00</span> -
                          <span className="">$60.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>

                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                      -30%
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                      src="public/images/sneaker7.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Caravaggio Read Wall Light</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="line-through text-lightGray">
                            $59.00{" "}
                          </span>{" "}
                          -<span className="text-red-600">$60.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html" className="bg-red">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                      Out of stock
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_heart}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_reload}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src={ico_search}
                            className="image size-4 rouded-full"
                            alt=""
                          />
                        </button>
                      </li>
                    </ul>

                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                    src="public/images/sneaker8.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src={ico_star_active}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                      <img
                        className="size-13 inline-block"
                        src={ico_star_gray}
                        alt=""
                      />
                    </div>
                    <h3 className="text-15 mt-2">Egg Dining Table</h3>
                    <div className="mt-2 relative h-5 overflow-hidden">
                      <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="">$70.00</span>
                        </div>
                        <a
                          href="#none"
                          className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                        >
                          Add to cart
                        </a>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>

              <div className="mt-10">
                <ul className="flex items-center justify-center gap-2">
                  <li>
                    <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                      <img
                        className="size-4"
                        src="./images/ico_chevron_left.png"
                        alt=""
                      />
                    </button>
                  </li>
                  <li>
                    <a className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all bg-black text-white">
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                      href="#none"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                      href="#none"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                      href="#none"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                      <img
                        className="size-4"
                        src="./images/ico_chevron_right.png"
                        alt=""
                      />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MainShop;
