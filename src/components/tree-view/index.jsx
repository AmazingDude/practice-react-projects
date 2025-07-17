import React from "react";
import { MenuList } from "./menu-list";

export const TreeView = ({ menus = [] }) => {
	return (
		<div
			className="tree-view-container
		h-[100vh] w-[22rem] bg-purple-900"
		>
			<MenuList list={menus} />
		</div>
	);
};
