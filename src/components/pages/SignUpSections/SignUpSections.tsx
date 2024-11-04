"use client";

import React from "react";
import scss from "./SignUpSections.module.scss";
import { FcGoogle } from "react-icons/fc";

import img from "../../../assets/image/phone.png";

interface Value {
	name: string;
	email: string;
	password: string;
}
const SignUpSections = () => {

	return (
		<div className={scss.SignUpSections}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.photo}>
						<img width={880} src={img.src} alt="" />
					</div>
					<div className={scss.SignUp}>
						<h1>Create an account</h1>
						<p>Enter your details below</p>
						<input type="text" placeholder="Name" />
						<h2></h2>
						<input type="text" placeholder="Email or Phone Number" />
						<h2></h2>
						<input type="text" placeholder="Password" />
						<h2></h2>
						<div className={scss.log}>
							<button>Create Account</button>
							<button className={scss.google}>
								<span>
									<FcGoogle />
								</span>
								Sign up with Google
							</button>
							<p>
								Arleady have account? <span> Log in</span>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignUpSections;
