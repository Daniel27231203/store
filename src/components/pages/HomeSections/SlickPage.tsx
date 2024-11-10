"use client";
import React from "react";

import scss from "./SlickPage.module.scss";
import img1 from "../../../assets/image/hero_endframe__cvklg0xk3w6e_large 2.png";
import img2 from "../../../assets/image/1200px-Apple_gray_logo 1.png";
import img3 from "../../../assets/image/iphone-13-pro-106125.webp"
import img4 from "../../../assets/image/ifon15.png"
import img5 from "../../../assets/image/2.webp"
import img6 from "../../../assets/image/display_small_2x.png"
import { FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//@ts-ignore
import Slider from "react-slick";
const SlickPage = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={scss.SlickPage}>
			<div className="container">
				<div className={scss.content}>
					<Slider {...settings}>
            <div>
						<div className={scss.box}>
							<div className={scss.box2}>
								<div className={scss.apple}>
									<img src={img2.src} alt="Apple logo" />
									<p>iPhone 14 Series</p>
								</div>
								<h1>
									Up to 10% <br />
									off Voucher
								</h1>
								<div className={scss.apple}>
									<h2>Shop Now </h2>
									<span>
										<FaArrowRight />
									</span>
								</div>
							</div>
							<div>
								<img src={img1.src} alt="Hero end frame" />
							</div>
						</div>
            </div>
            <div>
						<div className={scss.boxes}>
							<div className={scss.box2}>
								<div className={scss.apple}>
									<img src={img2.src} alt="Apple logo" />
									<p>iPhone 13 Series</p>
								</div>
								<h1>
									Up to 50$ <br />
									off IPhone
								</h1>
								<div className={scss.apple}>
									<h2>Shop Now </h2>
									<span>
										<FaArrowRight />
									</span>
								</div>
							</div>
							<div className={scss.photo}>
								<img width={300} src={img3.src} alt="Hero end frame" />
							</div>
						</div>
            </div>
            <div>
						<div className={scss.boxes}>
							<div className={scss.box2}>
								<div className={scss.apple}>
									<img src={img2.src} alt="Apple logo" />
									<p>iPhone 14 Series</p>
								</div>
								<h1>
									Up to 140$ <br />
									off Voucher
								</h1>
								<div className={scss.apple}>
									<h2>Shop Now </h2>
									<span>
										<FaArrowRight />
									</span>
								</div>
							</div>
							<div>
								<img width={300} src={img4.src} alt="Hero end frame" />
							</div>
						</div>
            </div>
            <div>
						<div className={scss.boxes}>
							<div className={scss.box2}>
								<div className={scss.apple}>
									<img src={img2.src} alt="Apple logo" />
									<p>iPhone 12 Series</p>
								</div>
								<h1>
									Up to 20% <br />
									off Voucher
								</h1>
								<div className={scss.apple}>
									<h2>Shop Now </h2>
									<span>
										<FaArrowRight />
									</span>
								</div>
							</div>
							<div>
								<img width={300} src={img5.src} alt="Hero end frame" />
							</div>
						</div>
            </div>
            <div>
						<div className={scss.boxes}>
							<div className={scss.box2}>
								<div className={scss.apple}>
									<img src={img2.src} alt="Apple logo" />
									<p>iPhone 16 Series</p>
								</div>
								<h1>
									Up to 180$ <br />
									off IPhone
								</h1>
								<div className={scss.apple}>
									<h2>Shop Now </h2>
									<span>
										<FaArrowRight />
									</span>
								</div>
							</div>
							<div className="">
								<img width={300} src={img6.src} alt="Hero end frame" />
							</div>
						</div>
            </div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default SlickPage;
