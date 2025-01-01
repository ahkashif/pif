"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import Button from "../button/button";
import Icon from "../icon/icons";
import Image from "next/image";

function Header() {
	const pathName = usePathname();

	const isDashboardRoute = pathName.startsWith("/dashboard");

	return (
		<header className="fixed top-0 w-full flex items-center gap-8 px-16 bg-white z-20 border-b border-b-divider backdrop-blur-[25px] min-h-[90px] dark:bg-dark-2">
			{!isDashboardRoute && (
				<>
					<Link
						href="/"
						className="w-90 h-40">
						<Image
							src="/pif-logo.svg"
							alt="PIF Logo"
							className="cursor-pointer dark:hidden"
							loading="lazy"
							width={90}
							height={40}
						/>

						<Image
							src="/pif-logo-dark.svg"
							alt="PIF Logo"
							className="cursor-pointer hidden dark:inline"
							loading="lazy"
							width={90}
							height={40}
						/>
					</Link>

					<nav className="flex gap-20 items-center mx-8">
						<Link
							href="/"
							className={`text-body2 py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
								pathName === "/"
									? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
									: "text-foreground"
							}`}>
							Home
						</Link>
						<Link
							href="/pilots"
							className={`text-body2 text-center py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
								pathName === "/pilots"
									? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
									: "text-foreground"
							}`}>
							Pilots
						</Link>
						<Link
							href="/companies"
							className={`text-body2 py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
								pathName === "/companies"
									? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
									: "text-foreground"
							}`}>
							Companies
						</Link>
						<Link
							href="/community"
							className={`text-body2 py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
								pathName === "/community"
									? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
									: "text-foreground"
							}`}>
							Community
						</Link>
						<Link
							href="/experts"
							className={`text-body2 py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
								pathName === "/experts"
									? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
									: "text-foreground"
							}`}>
							Experts
						</Link>
						<Link
							href="/events"
							className={`text-body2 py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
								pathName === "/events"
									? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
									: "text-foreground"
							}`}>
							Events
						</Link>
					</nav>
				</>
			)}

			<div className="flex gap-20 items-center ml-auto py-2">
				<Icon name="search" />

				<a className="flex gap-2 items-center text-button dark:text-white">
					عربي
					<span>
						<Icon
							name="language"
							color="black"
						/>
					</span>
				</a>

				<Button
					classes="border border-gray-800 "
					variant="secondary"
					loading={false}>
					<Link
						href="/login"
						className={`text-body2 py-2 px-2 flex items-center min-h-[90px] transition-colors duration-300 hover:text-green-700 dark:text-white ${
							pathName === "/login"
								? "border-b-4 border-primary-lightGreen1 font-medium text-primary-lightGreen1"
								: "text-foreground"
						}`}>
						Sign Up
					</Link>
				</Button>

				<Icon
					name="theme"
					classes="dark:fill-white"
					color="white"
				/>

				<Icon
					name="notification"
					classes="dark:fill-white"
					color="white"
				/>
			</div>
		</header>
	);
}

export default Header;
