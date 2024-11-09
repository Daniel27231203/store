"use client";

import React from "react";
import scss from "./SignInSections.module.scss";

import img from "../../../assets/image/phone.png";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

interface Value {
	email: string;
	password: string;
}

const SignInSections = () => {
	const router = useRouter();
	const { register, handleSubmit } = useForm<Value>();

	return (
		<div className={scss.SignInSections}>
			<div className="container">
				<div className={scss.content}>
					<div className={scss.photo}>
						<img width={880} src={img.src} alt="" />
					</div>
					<div className={scss.SignUp}>
						<h1>Log in to Exclusive</h1>
						<p>Enter your details below</p>
						<form>
							<input
								type="text"
								placeholder="Email or Phone Number"
								{...register("email", { required: true })}
							/>
							<input
								type="text"
								placeholder="Password"
								{...register("password", { required: true })}
							/>
							<div className={scss.log}>
								<button type="submit">Log in</button>
								<button onClick={() => {
									router.push("/auth")
								}}>Forget Password</button>
							</div>
							
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SignInSections;
