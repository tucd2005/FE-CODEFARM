
import { Link } from "react-router-dom";



const OrderPage = () => {
  return (
    <>
       <section>
          <div className="pt-16">
            <h2 className="text-3xl font-semibold text-center">Thanh toán </h2>

            <div className="container">
              <div className="lg:grid grid-cols-2 mt-10 gap-8">
                <div>
                  <form action="" className="space-y-6">
                    <div className="w-full">
                      <label htmlFor="name" className="font-semibold text-lg">Liên hệ</label>
                      <input
                        id="name"
                        type="text"
                        className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                        placeholder="Email or mobile phone number"
                      />
                      <div className="flex items-center gap-2 mt-3">
                        <input id="email-check" className="cursor-pointer size-4" type="checkbox" />
                        <label htmlFor="email-check" className="text-[14px] cursor-pointer">Gửi email cho tôi với tin tức và ưu đãi</label>
                      </div>
                    </div>

                    <div className="w-full">
                      <label className="font-semibold text-lg">Vận chuyển</label>
                      <div className="flex items-center gap-2 mt-3">
                        <input id="ship-check" className="cursor-pointer size-4" type="checkbox" />
                        <label htmlFor="ship-check" className="text-[14px] cursor-pointer">Ship</label>
                      </div>
                      <div className="flex items-center gap-2 mt-3">
                        <input id="store-check" className="cursor-pointer size-4" type="checkbox" />
                        <label htmlFor="store-check" className="text-[14px] cursor-pointer">Nhận tại cửa hàng</label>
                      </div>

                      <div className="w-full p-3 border rounded-lg mt-6 border-gray">
                        <select name="" id="" className="w-full h-full text-[14px]">
                          <option value="">VietNam</option>
                          <option value="">USA</option>
                          <option value="">India</option>
                          <option value="">Australia</option>
                        </select>
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 mt-3 flex-1">
                          <input
                            name="first-name"
                            type="text"
                            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                            placeholder="Tên"
                          />
                        </div>
                        <div className="flex items-center gap-2 mt-3 flex-1">
                          <input
                            name="last-name"
                            type="text"
                            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                            placeholder="Họ"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3 flex-1">
                        <input
                          name="address"
                          type="text"
                          className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                          placeholder="Địa chỉ"
                        />
                      </div>

                      <div className="flex items-center gap-2 mt-3 flex-1">
                        <input
                          name="address"
                          type="text"
                          className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                          placeholder="Huyện"
                        />
                      </div>

                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 mt-3 flex-1">
                          <input
                            name="first-name"
                            type="text"
                            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                            placeholder="Thành phố"
                          />
                        </div>
                        <div className="flex items-center gap-2 mt-3 flex-1">
                          <input
                            name="last-name"
                            type="text"
                            className="mt-2 w-full h-[50px] border border-gray p-5 rounded-lg text-[14px]"
                            placeholder="Mã bưu chính (tùy chọn)"
                          />
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-3">
                        <input id="save-check" className="cursor-pointer size-4" type="checkbox" />
                        <label htmlFor="save-check" className="text-[14px] cursor-pointer">Lưu thông tin này cho lần sau</label>
                      </div>

                      <div className="mt-9">
                        <p className="font-semibold">Phương thức vận chuyển</p>
                        <div className="flex items-center justify-between mt-3 p-4 bg-[#f0f5ff] gap-3 border border-[#1773b0] rounded-lg">
                          <span className="flex-1">Tiêu chuẩn</span>
                          <span className="uppercase font-semibold text-[14px]">Miễn phí</span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <button
                          type="button"
                          className="w-full uppercase h-[55px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-lg hover:bg hover:bg-white border hover:border-black hover:text-black transition-all"
                        >
                          <Link to="/order/detail">Thanh toán ngay</Link>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div className="lg:p-10 mt-10 lg:mt-0">
                  <div className="md:px-5">
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <div className="size-16 border border-gray rounded-md overflow-hidden">
                          <img className="image" src="public/images/sneaker1.jpg" alt="" />
                        </div>
                        <p>Suspension Archives</p>
                        <span className="ml-auto">$59.00 </span>
                      </li>

                      <li className="flex items-center gap-3">
                        <div className="size-16 border border-gray rounded-md overflow-hidden">
                          <img className="image" src="public/images/sneaker2.jpg" alt="" />
                        </div>
                        <p>Suspension Archives</p>
                        <span className="ml-auto">$59.00 </span>
                      </li>
                    </ul>

                    <ul className="mt-6 space-y-4">
                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Subtotal • 2 items</span>
                        <span className="text-[14px]">$119.00</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Shipping</span>
                        <span className="text-[14px]">Free</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Estimated taxes</span>
                        <span className="text-[14px]">$11.90</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-lg font-bold">USD $130.90</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-12 pb-12"></section>
    </>
  )
}

export default OrderPage
