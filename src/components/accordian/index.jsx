import React, { useState } from "react";
import data from "./data";

function Accordian() {
	const [selected, setSelected] = useState(null);
	const [toggleMultiSelection, setToggleMultiSelection] = useState(false);
	const [multiple, setMultiple] = useState([]);

	const handleSingleSelection = (getCurrentId) => {
		setSelected(getCurrentId === selected ? null : getCurrentId);

		// let cpyMultiple = [...multiple];
		// const findCurrIndex = cpyMultiple.indexOf(getCurrentId);
		// if (findCurrIndex !== -1) {
		// 	cpyMultiple.splice(findCurrIndex, 1);
		// 	setMultiple(cpyMultiple);
		// }
	};

	const handleMultiSelection = (getCurrentId) => {
		let cpyMultiple = [...multiple];
		const findCurrIndex = cpyMultiple.indexOf(getCurrentId);

		if (findCurrIndex === -1) cpyMultiple.push(getCurrentId);
		else cpyMultiple.splice(findCurrIndex, 1);

		setMultiple(cpyMultiple);
	};

	return (
		<div
			className="wrapper
        flex h-[100vh] w-[100vw] justify-center items-center flex-col gap-5"
		>
			<button
				className="px-3 py-5 bg-black text-cyan-50 font-bold text-lg cursor-pointer"
				onClick={() => setToggleMultiSelection(!toggleMultiSelection)}
			>
				Enable Multi Selection
			</button>
			<div
				className="Accordian
            w-[31rem]"
			>
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div
							className="item
                        bg-cyan-600 mb-3 px-2 py-5"
						>
							<div
								className="title
                                flex justify-between items-center cursor-pointer flex-wrap"
								onClick={
									toggleMultiSelection
										? () => handleMultiSelection(dataItem.id)
										: () => handleSingleSelection(dataItem.id)
								}
								key={dataItem.id}
							>
								<h3 className="font-bold text-lg mb-2 text-cyan-950">
									{dataItem.question}
								</h3>
								<span>+</span>
								{selected === dataItem.id ||
								multiple.indexOf(dataItem.id) !== -1 ? (
									<div
										className="content
                                    text-white h-auto text-sm"
									>
										{dataItem.answer}
									</div>
								) : null}
							</div>
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
}

export default Accordian;
