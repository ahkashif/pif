"use client";

import { useState, useEffect } from "react";
import Button from "@/app/components/button/button";
import { useSelector } from "react-redux";
import { RootState } from "@/app/libs/store/store";
import axios from "axios";
import { useRouter } from "next/navigation";

export function LoginForm() {
	const userDetails = useSelector((state: RootState) => state.userDetails);
	const router = useRouter();

	const [user, setUser] = useState({
		email: userDetails.email || "",
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

	const handleLogin = async () => {
		try {
			setLoading(true);
			const response = await axios.post("/api/users/login", user);
			if (response.status === 200) {
				router.push("/dashboard");
			}
		} catch (error) {
			setLoading(false);
			console.log("Error Occured", error);
		}
	};

	return (
		<>
			<h3 className="text-h3 font-semibold ">Log in to Real Estate Innovation Hub</h3>
			<div className="flex max-w-[340px] flex-col gap-20">
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
						onChange={(e) => setUser({ ...user, email: e.target.value })}
						value={user.email}
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
						onChange={(e) => setUser({ ...user, password: e.target.value })}
						value={user.password}
					/>
					<div className="text-underlineLink2 underline text-right">Forget Password?</div>
				</div>

				<Button
					variant="primary"
					disabled={buttonDisabled}
					loading={loading}
					onClick={handleLogin}>
					Login
				</Button>
			</div>
		</>
	);
}
