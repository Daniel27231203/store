import React from "react";
import scss from "./AboutPage.module.scss";
import img from "../../assets/image/Side Image.png";
import svg from "../../assets/image/Services.png";
import svg1 from "../../assets/image/Services (1).png";
import svg2 from "../../assets/image/Services (2).png";
import svg3 from "../../assets/image/Services (3).png";
import svg4 from "../../assets/image/Services (4).png";
import svg5 from "../../assets/image/Services (5).png";
import svg6 from "../../assets/image/Services (6).png";
import AboutClick from "./AbautSection/AboutClick";
const AboutPage = () => {
	return (
		<div className={scss.AboutPage}>
			<div className="container">
				<div className={scss.home}>
					<h1>Home /</h1>
					<h1> </h1>
					<h1>About</h1>
				</div>
				<div className={scss.content}>
					<div className={scss.story}>
						<h2>Our Story</h2>
						<p>
							Launced in 2015, Exclusive is South Asia’s premier online shopping
							<br />
							makterplace with an active presense in Bangladesh. Supported
							<br /> by wide range of tailored marketing, data and service
							solutions, <br />
							Exclusive has 10,500 sallers and 300 brands and serves 3 <br />
							millioons customers across the region.
						</p>
						<p>
							Exclusive has more than 1 Million products to offer, growing at a{" "}
							<br />
							very fast. Exclusive offers a diverse assotment in categories{" "}
							<br />
							ranging from consumer.
						</p>
					</div>
					<div className={scss.photo}>
						<img src={img.src} alt="" />
					</div>
				</div>
				<div className={scss.block}>
					<div className={scss.box}>
						<img src={svg.src} alt="" />
						<h1>10.5k</h1>
						<p>Sallers active our site</p>
					</div>
					<div className={scss.box}>
						<img src={svg1.src} alt="" />
						<h1>33k</h1>
						<p>Mopnthly Produduct Sale</p>
					</div>
					<div className={scss.box}>
						<img src={svg2.src} alt="" />
						<h1>45.5k</h1>
						<p>Customer active in our site</p>
					</div>
					<div className={scss.box}>
						<img src={svg3.src} alt="" />
						<h1>25k</h1>
						<p>Anual gross sale in our site</p>
					</div>
				</div>
				<div></div>
				<AboutClick />
				<div className={scss.links}>
					<div className={scss.boxes}>
						<img src={svg4.src} alt="" />
						<h1>FREE AND FAST DELIVERY</h1>
						<p>Free delivery for all orders over $140</p>
					</div>
					<div className={scss.boxes}>
						<img src={svg5.src} alt="" />
						<h1>24/7 CUSTOMER SERVICE</h1>
						<p>Friendly 24/7 customer support</p>
					</div>
					<div className={scss.boxes}>
						<img src={svg6.src} alt="" />
						<h1>MONEY BACK GUARANTEE</h1>
						<p>We reurn money within 30 days</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutPage;
