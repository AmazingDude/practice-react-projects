import React, { useState } from "react";

function StarRating({ numOfStars = 5 }) {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);

	const handleClick = (getCurrIndex) => {
		setRating(getCurrIndex);
	};

	const handleMouseEnter = (getCurrIndex) => {
		setHover(getCurrIndex);
	};

	const handleMouseLeave = () => {
		setHover(rating);
	};
	return (
		<div
			className="star-rating
        flex items-center justify-center bg-gray-700 h-[100vh] w[100-vw]"
		>
			{[...Array(numOfStars)].map((val, index) => {
				index += 1;
				return (
					<i
						className={`fa fa-star text-3xl ${
							index <= (hover || rating) ? "text-amber-300" : "text-amber-100"
						}`}
						aria-hidden="true"
						key={index}
						onClick={() => handleClick(index)}
						onMouseEnter={() => handleMouseEnter(index)}
						onMouseLeave={() => handleMouseLeave()}
					></i>
				);
			})}
		</div>
	);
}

export default StarRating;
