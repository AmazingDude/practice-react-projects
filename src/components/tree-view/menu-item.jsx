import React, { useState } from "react";
import { MenuList } from "./menu-list";

export const MenuItem = ({ item }) => {
	const [displayCurrentChild, setDisplayCurrentChild] = useState({});
	const handleToggleChildren = (getCurrentLabel) => {
		setDisplayCurrentChild({
			...displayCurrentChild,
			[getCurrentLabel]: !displayCurrentChild[getCurrentLabel],
		});
	};

	return (
		<li>
			<div className="flex gap-5 items-center cursor-pointer text-purple-50">
				<p>{item.label}</p>
				{item && item.children && item.children.length ? (
					<span onClick={() => handleToggleChildren(item.label)}>
						{displayCurrentChild[item.label] ? "-" : "+"}
					</span>
				) : null}
			</div>
			{item &&
			item.children &&
			item.children.length > 0 &&
			displayCurrentChild[item.label] ? (
				<MenuList list={item.children} />
			) : null}
		</li>
	);
};
