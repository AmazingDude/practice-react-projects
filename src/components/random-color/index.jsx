import React, { useEffect, useState } from "react";

function RandomColor() {
	const [colorType, setColorType] = useState("hex");
	const [color, setColor] = useState("#000");

	const randomColorUtil = (length) => {
		return Math.floor(Math.random() * length);
	};

	const handleGenerateHexCol = () => {
		const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];
		let hexColor = "#";

		for (let i = 0; i < 6; i++) {
			hexColor += hex[randomColorUtil(hex.length)];
		}
		console.log(hexColor);
		setColor(hexColor);
	};

	const handleGenerateRgbCol = () => {
		const red = randomColorUtil(256);
		const green = randomColorUtil(256);
		const blue = randomColorUtil(256);

		setColor(`rgb(${red}, ${green}, ${blue})`);
	};

	useEffect(() => {
		colorType === "hex" ? handleGenerateHexCol() : handleGenerateRgbCol();
	}, [colorType]);

	return (
		<div
			className={`container
        w-[100vw] h-[100vw] text-white`}
			style={{ background: color }}
		>
			<button
				onClick={() => setColorType("hex")}
				className="cursor-pointer rounded-xl px-4 py-2 text-black bg-[rgb(256,256,256,0.6)] hover:bg-[rgb(256,256,256,0.9)] transition duration-200]"
			>
				Generate HEX Color
			</button>
			<button
				onClick={() => setColorType("rgb")}
				className="cursor-pointer rounded-xl px-4 py-2 text-black bg-[rgb(256,256,256,0.6)] hover:bg-[rgb(256,256,256,0.9)] transition duration-200]"
			>
				Generate RGB Color
			</button>
			<button
				onClick={() =>
					colorType === "hex" ? handleGenerateHexCol() : handleGenerateRgbCol()
				}
				className="cursor-pointer rounded-xl px-4 py-2 text-black bg-[rgb(256,256,256,0.6)] hover:bg-[rgb(256,256,256,0.9)] transition duration-200]"
			>
				Generate
			</button>
			<div className="flex justify-center items-center text-6xl mt-12 flex-col gap-5">
				<h3>{colorType === "rgb" ? "RGB Color" : "Hex Color"}</h3>
				<h1>{color}</h1>
			</div>
		</div>
	);
}

export default RandomColor;
