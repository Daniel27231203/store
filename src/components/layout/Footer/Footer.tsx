import React from "react";
import scss from "./Footer.module.scss";
import { LuSendHorizonal } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { FiTwitter } from "react-icons/fi";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import Qrg from "../../../assets/image/Qrcode 1.png";



const Footer = () => {
	return (
		<div className={scss.Footer}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.block}>
						<h1>Exclusive</h1>
						<h2>Subscribe</h2>
						<p>Get 10% off your first order</p>
						<div className={scss.inputs}>
							<input type="text" placeholder="Enter your email" />
							<span>
								<LuSendHorizonal />
							</span>
						</div>
					</div>
					<div className={scss.block}>
						<h1>Support</h1>
						<p>
							111 Bijoy sarani, Dihaka, <br />
							DH 1515, Bangladesh.
						</p>
						<p>exclusive@gmail.com</p>
						<p>+88015-88888-99999</p>
					</div>
					<div className={scss.block}>
						<h1>Account</h1>
						<p>My Account</p>
						<p>Login/Register</p>
						<p>Cart</p>
						<p>Wishlist</p>
						<p>Shop</p>
					</div>
					<div className={scss.block}>
						<h1>Quick links</h1>
						<p>Privacy Policy</p>
						<p>Terms Of Use</p>
						<p>FAQ</p>
						<p>Contact</p>
					</div>
					<div className={scss.block}>
						<h1>Download App</h1>
						<span>Save $3 with App New User Only</span>
						<div className={scss.Quar}>
							<div>
								<img src={Qrg.src} alt="QR Code" />
							</div>
							<div className={scss.book}>
								<div className={scss.icons}>
									<span>
										<FaGooglePlay />
									</span>
									<div>
										<p>Get in on</p>
										<h1>Google Play</h1>
									</div>
								</div>
								<div className={scss.icons}>
									<span>
										<FaApple />
									</span>
									<div>
										<p>Download on the</p>
										<h1>App Store</h1>
									</div>
								</div>
							</div>
						</div>
						<div className={scss.spans}>
							<span>
								<TiSocialFacebook />
							</span>
							<span>
								<FiTwitter />
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
		</div>
	);
};

export default Footer;
	