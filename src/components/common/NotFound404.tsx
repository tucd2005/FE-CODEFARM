import { Link } from "react-router-dom";

type Props = {};

const NotFound404 = (props: Props) => {
	return (
		<div className="min-[320px]:px-[5%] xl:px-[11.5%] 2xl:px-[17.5%] w-full h-screen flex justify-start items-center">
			<div className="flex flex-col items-start justify-start">
				<div className="flex gap-10 justify-start items-start">
					<img className="w-1/2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx3TrJ-7QDZA2g8ClZh2R2mnkSiJZlf4cCUQ&s" alt="" />
					<div>
						<p className="text-[100px] font-bold">404</p>
						<div className="flex items-center">Đã có lỗi xảy ra , đường dẫn không tồn tại</div>
						<Link to={"/"} className="border-b pr-1 border-black py-1 w-fit">
							Trở về trang chủ
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NotFound404;