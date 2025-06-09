
const OrderDetail = () => {
  return (
    <>
    <main>

       <section>
          <div className="pt-16">
            <h2 className="text-3xl font-semibold text-center">Chi tiết đơn hàng</h2>
            <div className="container">
              <div className="lg:grid grid-cols-5 gap-10 mt-20">
                <div className="col-span-3">
                  <div className="flex items-center gap-3">
                    <p className="font-bold">PH54332</p>
                    <span className="py-1 px-3 font-semibold text-xs rounded-lg border border-purple-600 text-purple-600">Đang chờ xác nhận</span>
                  </div>

                  <div className="mt-6">
                    <div>
                      <p className="font-semibold py-5 border-b border-b-gray">Chi tiết đơn hàng</p>
                      <ul className="flex items-start mt-6">
                        <li className="flex-1">
                          <p
                            className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-3 before:rounded-full before:bg-purple-600 w-full border-b border-dashed border-b-lightGray"
                          ></p>
                          <p className="mt-4 text-[14px] text-purple-600">Đang chờ xác nhận</p>
                          <p className="mt-2 text-xs text-purple-600">Đang chờ xác nhận</p>
                          <p className="mt-2 text-xs text-lightGray">18/10/2024 - 20/10/2024</p>
                        </li>
                        <li className="flex-1">
                          <p
                            className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-3 before:rounded-full before:bg-lightGray w-full border-b border-dashed border-b-lightGray"
                          ></p>
                          <p className="mt-4 text-[14px] text-lightGray">Đóng gói</p>
                        </li>
                        <li className="flex-1">
                          <p
                            className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-3 before:rounded-full before:bg-lightGray w-full border-b border-dashed border-b-lightGray"
                          ></p>
                          <p className="mt-4 text-[14px] text-lightGray">Vận chuyển</p>
                        </li>
                        <li className="flex-1">
                          <p
                            className="relative pl-4 before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:size-3 before:rounded-full before:bg-lightGray w-full border-b-lightGray"
                          ></p>
                          <p className="mt-4 text-[14px] text-lightGray">Hoàn thành</p>
                        </li>
                      </ul>

                      <div className="mt-6 p-3 bg-yellow-50 rounded-lg">
                        <p className="font-semibold">Lưu ý khách hàng</p>
                        <p className="mt-3 text-[14px]">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab minima illo enim nisi laborum quam sed neque, quasi quia
                          necessitatibus exercitationem architecto laboriosam repellendus alias ad aliquid consectetur officiis quas!
                        </p>
                      </div>

                      <div className="mt-6">
                        <ul className="space-y-3">
                          <li className="flex items-center gap-3">
                            <div className="size-16 border border-gray rounded-md overflow-hidden">
                              <img className="image" src="public/images/sneaker1.jpg" alt="" />
                            </div>
                            <p className="flex flex-col">
                              <span className="font-semibold">Dashboard</span>
                              <span className="mt-2 text-xs">X2</span>
                            </p>
                            <span className="ml-auto">$59.00</span>
                          </li>

                          <li className="flex items-center gap-3">
                            <div className="size-16 border border-gray rounded-md overflow-hidden">
                              <img className="image" src="public/images/sneaker2.jpg" alt="" />
                            </div>
                            <p className="flex flex-col">
                              <span className="font-semibold">Product aaaa</span>
                              <span className="mt-2 text-xs">X4</span>
                            </p>
                            <span className="ml-auto">$59.00</span>
                          </li>

                          <li className="flex items-center gap-3">
                            <div className="size-16 border border-gray rounded-md overflow-hidden">
                              <img className="image" src="public/images/sneaker3.jpg" alt="" />
                            </div>
                            <p className="flex flex-col">
                              <span className="font-semibold">Suspension </span>
                              <span className="mt-2 text-xs">X5</span>
                            </p>
                            <span className="ml-auto">$59.00</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 mt-9 lg-mt-0">
                  <div className="p-5 rounded-lg bg-slate-50">
                    <ul className="space-y-4">
                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Khách hàng</span>
                        <span className="text-[14px]">Nguyen Quang Quyen</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Điện thoại</span>
                        <span className="text-[14px]">0911392344</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Email</span>
                        <span className="text-[14px]">quyennqph54332@gmail.com</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Địa chỉ</span>
                        <span className="text-[14px]">Hà Nội - Việt Nam</span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 rounded-lg bg-slate-50 mt-6">
                    <ul className="space-y-4 mt-6">
                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Tổng phụ • 2 mặt hàng</span>
                        <span className="text-[14px]">$119.00</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Vận chuyển</span>
                        <span className="text-[14px]">Miễn phí</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-[14px]">Thuế ước tính</span>
                        <span className="text-[14px]">$11.90</span>
                      </li>

                      <li className="flex items-center justify-between">
                        <span className="text-lg font-bold">Tổng cộng</span>
                        <span className="text-lg font-bold">USD $130.90</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </main>
    
    </>
  )
}

export default OrderDetail
