"use client";
//@ts-ignore
import Slider from "react-slick";
import React from "react";
import scss from "./AboutClick.module.scss";
import "slick-carousel/slick/slick.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import svg5 from "../../../assets/image/1.webp"
import svg6 from "../../../assets/image/unnamed.png"
import "slick-carousel/slick/slick-theme.css";
import svg from "../../../assets/image/image 46.png";
import svg1 from "../../../assets/image/image 51.png";

import svg2 from "../../../assets/image/image 47.png";
import { LuTwitter } from "react-icons/lu";

const AboutClick = () => {
	let settings = {
		dots: true,
		infinite: true,
		speed: 400,
		slidesToShow: 1,
		slidesToScroll: 1,
	};
	return (
		<div className={scss.AboutClick}>
			<div className="container">
				<div className={scss.content}>
					<Slider {...settings}>
						<div>
							<div className={scss.log}>
								<div className={scss.click}>
									<div className={scss.img}>
										<img src={svg.src} alt="" />
									</div>
									<h1>Tom Cruise</h1>
									<p>Founder & Chairman</p>
									<div className={scss.icons}>
										<span>
											<LuTwitter />
										</span>
										<span>
											<FaInstagram />
										</span>
										<span>
											<FaLinkedinIn />
										</span>
									</div>
								</div>
								<div className={scss.click}>
									<div className={scss.img}>
										<img src={svg1.src} alt="" />
									</div>
									<h1>Emma Watson</h1>
									<p>Managing Director</p>
									<div className={scss.icons}>
										<span>
											<LuTwitter />
										</span>
										<span>
											<FaInstagram />
										</span>
										<span>
											<FaLinkedinIn />
										</span>
									</div>
								</div>
								<div className={scss.click}>
									<div className={scss.img}>
										<img src={svg2.src} alt="" />
									</div>
									<h1>Will Smith</h1>
									<p>Product Designer</p>
									<div className={scss.icons}>
										<span>
											<LuTwitter />
										</span>
										<span>
											<FaInstagram />
										</span>
										<span>
											<FaLinkedinIn />
										</span>
									</div>
								</div>
							</div>
						</div>
						<div>
							<div className={scss.click}>
								<div className={scss.img}>
									<img src={svg2.src} alt="" />
								</div>
								<h1>Will Smith</h1>
								<p>Product Designer</p>
								<div className={scss.icons}>
									<span>
										<LuTwitter />
									</span>
									<span>
										<FaInstagram />
									</span>
									<span>
										<FaLinkedinIn />
									</span>
								</div>
							</div>
						</div>
						<div>
			<div className={scss.log}>
			<div className={scss.click}>
									<div className={scss.img}>
										<img src={svg1.src} alt="" />
									</div>
									<h1>Emma Watson</h1>
									<p>Managing Director</p>
									<div className={scss.icons}>
										<span>
											<LuTwitter />
										</span>
										<span>
											<FaInstagram />
										</span>
										<span>
											<FaLinkedinIn />
										</span>
									</div>
								</div>
								<div className={scss.click}>
									<div className={scss.img}>
										<img width={200} height={380} src={svg5.src} alt="" />
									</div>
									<h1>Emma Watson</h1>
									<p>Managing Director</p>
									<div className={scss.icons}>
										<span>
											<LuTwitter />
										</span>
										<span>
											<FaInstagram />
										</span>
										<span>
											<FaLinkedinIn />
										</span>
									</div>
								</div>
								<div className={scss.click}>
									<div className={scss.img}>
										<img width={200}  src={svg6.src} alt="" />
									</div>
									<h1>Emma Watson</h1>
									<p>Managing Director</p>
									<div className={scss.icons}>
										<span>
											<LuTwitter />
										</span>
										<span>
											<FaInstagram />
										</span>
										<span>
											<FaLinkedinIn />
										</span>
									</div>
								</div>
			</div>
						</div>
					</Slider>
				</div>
			</div>
		</div>
	);
};

export default AboutClick;
