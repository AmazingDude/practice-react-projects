import React from "react";
import { MenuItem } from "./menu-item";

export const MenuList = ({ list = [] }) => {
	return (
		<ul
			className="menu-list-container
		space-x-6 ml-4 mt-0 mb-0"
		>
			{list && list.length
				? list.map((listItem) => <MenuItem item={listItem} />)
				: null}
		</ul>
	);
};
