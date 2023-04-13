import { ImageField } from "@prismicio/types";
import Image from "next/image";
import { useState } from "react";
import { NavitemDocument } from "../../.slicemachine/prismicio";
import { Nav } from "./Nav";

interface HeaderProps {
	image: ImageField<never>;
	navItems: NavitemDocument<string>[];
}

export const Header = ({ image, navItems }: HeaderProps) => {
	const [burgerOpen, setBurgerOpen] = useState(false);
	return (
		<>
			<header className="fixed z-50 w-full">
				<div className="max-w-7xl mx-auto flex justify-between items-center top-0 w-full px-6 py-12">
					<Image
						width={image.dimensions?.width}
						height={image.dimensions?.height}
						alt={image.alt!}
						src={image.url!}
						className={burgerOpen ? "invert delay-150" : "invert-0"}
					/>
					<button
						className="burger-closed"
						onClick={() => setBurgerOpen(!burgerOpen)}
					>
						<div
							className={
								burgerOpen
									? "absolute top-1/2 rotate-45 h-[2px] w-full rounded-full bg-my-black duration-300 delay-75"
									: "absolute top-[3px] h-[2px] w-full rounded-full bg-white duration-300"
							}
						></div>
						<div
							className={
								burgerOpen
									? "absolute top-1/2 h-[2px] w-0 bg-my-black duration-300"
									: "absolute top-1/2 -translate-y-1/2 h-[2px] w-full rounded-full bg-white duration-300"
							}
						></div>
						<div
							className={
								burgerOpen
									? "absolute top-1/2 -rotate-45 h-[2px] w-full rounded-full bg-my-black duration-300 delay-150"
									: "absolute bottom-[3px] h-[2px] w-full rounded-full bg-white duration-700"
							}
						></div>
					</button>
				</div>
			</header>
			{/* Mobile nav */}
			<div
				className={
					burgerOpen
						? "bg-white fixed inset-0 duration-300 z-40 pt-36 px-6"
						: "bg-white fixed inset-0 left-full duration-300 z-40 pt-36 px-6"
				}
			>
				<Nav navItems={navItems} />
			</div>
		</>
	);
};
