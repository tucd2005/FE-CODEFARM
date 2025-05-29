import img_product_cart from "../../../assets/images/img_product_cart.avif";
import img_product_cart2 from "../../../assets/images/img_product_cart2.avif";
import ico_trash from "../../../assets/images/ico_trash.png";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <>
      <section className="">
        <div className="pt-20">
          <h2 className="text-3xl font-semibold text-center">Shopping Cart</h2>

          <div className="container">
            <div className="lg:grid grid-cols-6 mt-10 gap-8">
              <div className="col-span-4">
                <div className="border border-gray rounded-lg">
                  <div className="hidden lg:flex ">
                    <div className="p-5 border border-gray w-2/4 flex items-center justify-center">
                      Product
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      Quantity
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      Total
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center"></div>
                  </div>

                  <div className="flex flex-wrap ">
                    <div className="p-2 lg:p-5 border border-gray w-2/4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 overflow-hidden">
                          <img
                            className="image"
                            src={img_product_cart}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-xs uppercase">
                            CH07 SHELL CHAIR – LEATHER
                          </p>
                          <span className="text-xs">$75.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 border border-gray w-1/4 justify-center lg:flex hidden">
                      <div className="flex items-center w-max relative">
                        <button
                          type="button"
                          className="text-lg block text-[0px] absolute left-4"
                        >
                          <span className="text-2xl leading-[24px]">-</span>
                        </button>
                        <input
                          type="text"
                          className="w-[120px] h-[40px] border px-10 border-black rounded-full text-center"
                          value="1"
                        />
                        <button
                          type="button"
                          className="text-lg block text-[0px] absolute right-4"
                        >
                          <span className="text-2xl leading-[24px]">+</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      $150.00
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      <button type="button">
                        <img className="block size-5" src={ico_trash} alt="" />
                      </button>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="p-2 lg:p-5 border border-gray w-2/4">
                      <div className="flex items-center gap-3">
                        <div className="w-32 overflow-hidden">
                          <img
                            className="image"
                            src={img_product_cart2}
                            alt=""
                          />
                        </div>
                        <div>
                          <p className="text-xs uppercase">
                            CH07 SHELL CHAIR – LEATHER
                          </p>
                          <span className="text-xs">$75.00</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-5 border border-gray w-1/4 justify-center lg:flex hidden">
                      <div className="flex items-center w-max relative">
                        <button
                          type="button"
                          className="text-lg block text-[0px] absolute left-4"
                        >
                          <span className="text-2xl leading-[24px]">-</span>
                        </button>
                        <input
                          type="text"
                          className="w-[120px] h-[40px] border px-10 border-black rounded-full text-center"
                          value="1"
                        />
                        <button
                          type="button"
                          className="text-lg block text-[0px] absolute right-4"
                        >
                          <span className="text-2xl leading-[24px]">+</span>
                        </button>
                      </div>
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      $150.00
                    </div>
                    <div className="p-5 border border-gray w-1/4 flex items-center justify-center">
                      <button type="button">
                        <img className="block size-5" src={ico_trash} alt="" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-9">
                  <p className="text-md">Special instructions for seller</p>

                  <textarea
                    name=""
                    id=""
                    placeholder="how can we help you?"
                    className="text-md mt-3 border border-gray p-5 w-full"
                    rows={5}
                  ></textarea>
                </div>
              </div>
              <div className="col-span-2 mt-6 lg:mt-0">
                <div className="p-7 bg-[#f7f4ef] rounded-lg">
                  <h3 className="uppercase font-medium text-sm">
                    FREE SHIPPING ON ORDERS $100.00
                  </h3>
                  <p className="text-sm mt-2">
                    Congratulations , you've got free shipping!
                  </p>
                  <p className="bg-[#14c100] w-full h-1 mt-5"></p>
                </div>

                <div className="p-6 mt-4 bg-[#f6f6f6] rounded-lg">
                  <span>Coupon</span>
                  <p className="mt-2 mb-6 text-md text-lightGray">
                    * Discount will be calculated and applied at checkout
                  </p>
                  <input
                    type="text"
                    className="h-10 px-6 text-sm border border-gray rounded-md w-full"
                    placeholder="Coupon code"
                  />
                  <p className="mt-6 font-semibold">Total: $450.00</p>

                  <Link 
                    to="/order"
                    className="flex items-center justify-center h-[50px] mt-6 bg-black w-full text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                  >
                    Check out
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Card;
