import { PrismicRichText } from "@prismicio/react";
import { NavitemDocument } from "../../.slicemachine/prismicio";
import { NavSubItem } from "./NavSubItem";

interface NavProps {
	navItems: NavitemDocument<string>[];
}

export const Nav = ({ navItems }: NavProps) => {
	return (
		<>
			<nav>
				<ul>
					{navItems.map((item: NavitemDocument<string>) => {
						return (
							<li key={item.id}>
								<PrismicRichText field={item.data.title} />
								{item.uid == "services" ??
									item.data.subitem.map((subItem: any) => {
										return (
											<NavSubItem
												key={subItem.content.uid}
												image={subItem.content.data.icon}
												title={subItem.content.data.title}
												body={subItem.content.data.body}
											/>
										);
									})}
							</li>
						);
					})}
				</ul>
			</nav>
		</>
	);
};
