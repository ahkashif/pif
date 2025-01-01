"use client";

import Button from "@/app/components/button/button";
import { updateUserDetails } from "@/app/libs/store/slices/userDetailsSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";

export function SignupForm() {
	const dispatch = useDispatch();
	const router = useRouter();

	const [user, setUser] = useState({
		username: "",
		email: "",
		password: "",
	});

	const [buttonDisabled, setButtonDisabled] = useState(false);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		if (user.email.length > 0 && user.password.length > 0) {
			setButtonDisabled(false);
		} else {
			setButtonDisabled(true);
		}
	}, [user]);

	const handleSignUp = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/users/signup", user);
			if (response.status === 200) {
				console.log("User Registered", response);
				dispatch(
					updateUserDetails({
						username: user.username,
						email: user.email,
					})
				);
				router.push("/login");
			}
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<>
			<h3 className="text-h3 font-semibold ">Sign Up to Real Estate Innovation Hub</h3>
			<div className="flex max-w-[340px] flex-col gap-20">
				<div className="flex flex-col">
					<label
						className="text-body2 text-gray-1 font-light mb-1 dark:text-white"
						htmlFor="username">
						Username
					</label>
					<input
						id="username"
						name="email"
						className="text-body2 text-gray-1 rounded-[10px] border border-divider px-20 py-[15px] min-w-[340px]"
						value={user.username}
						onChange={(e) => setUser({ ...user, username: e.target.value })}
					/>
				</div>

				<div className="flex flex-col">
					<label
						className="text-body2 text-gray-1 font-light mb-1 dark:text-white"
						htmlFor="email">
						Email Address
					</label>
					<input
						id="email"
						name="email"
						placeholder="username@mail.com"
						className="text-body2 text-gray-1 rounded-[10px] border border-divider px-20 py-[15px] min-w-[340px]"
						value={user.email}
						onChange={(e) => setUser({ ...user, email: e.target.value })}
					/>
				</div>

				<div className="flex flex-col gap-2">
					<label
						className="text-body2 text-gray-1 font-light mb-1 dark:text-white"
						htmlFor="password">
						Password
					</label>
					<input
						id="password"
						name="password"
						type="password"
						placeholder=""
						className="text-body2 text-gray-1 rounded-[10px] border border-divider px-20 py-[15px] min-w-[340px]"
						value={user.password}
						onChange={(e) => setUser({ ...user, password: e.target.value })}
					/>
				</div>

				<Button
					disabled={buttonDisabled}
					type="submit"
					variant="primary"
					loading={loading}
					onClick={handleSignUp}>
					Sign Up
				</Button>
			</div>
		</>
	);
}
