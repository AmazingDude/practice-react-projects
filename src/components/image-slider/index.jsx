import React, { useEffect, useState } from "react";

function ImageSlider({ url, limit = 5, page = 1 }) {
	const [images, setImages] = useState([]);
	const [currentSlide, setCurrentSlide] = useState(0);
	const [errorMessage, setErrorMessage] = useState(null);
	const [loading, setLoading] = useState(false);

	const fetchImages = async (getUrl) => {
		try {
			setLoading(true);

			const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
			const data = await response.json();

			if (data) {
				setImages(data);
				setLoading(false);
			}
		} catch (e) {
			setErrorMessage(e.message);
		}
	};

	// console.log(images);

	const handleNext = () => {
		setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
	};

	const handlePrevious = () => {
		setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
	};

	useEffect(() => {
		if (url !== "") fetchImages(url);
	}, [url]);

	if (loading) return <div>Loading data! Please wait</div>;
	if (errorMessage !== null) return <div>Error occured!</div>;

	return (
		<div
			className="container
        relative flex justify-center items-center w-[37rem] h-[28rem]"
		>
			<i
				className="fa fa-arrow-circle-left
            absolute w-8 text-white left-4 text-xl cursor-pointer hover:scale-125 transition duration-300"
				aria-hidden="true"
				onClick={() => handlePrevious()}
			/>
			{images && images.length
				? images.map((imageItem, index) => (
						<img
							key={imageItem.id}
							alt={imageItem.url}
							src={imageItem.download_url}
							className={`${currentSlide === index ? "current-image" : "hidden"}
                            rounded-lg shadow w-[100%] h-[100%]`}
						></img>
				  ))
				: null}
			<i
				className="fa fa-arrow-circle-right
            absolute w-8 text-white right-4 text-xl cursor-pointer hover:scale-125 transition duration-300"
				aria-hidden="true"
				onClick={() => handleNext()}
			></i>
			<span
				className="circle-indicators
            flex absolute bottom-4"
			>
				{images && images.length
					? images.map((val, index) => (
							<button
								key={index}
								className={`${
									currentSlide === index
										? "current-indicator bg-white"
										: "bg-white/50"
								}
                            h-3.5 w-3.5 rounded-full cursor-pointer mx-1 transition duration-300`}
								onClick={() => setCurrentSlide(index)}
							></button>
					  ))
					: null}
			</span>
		</div>
	);
}

export default ImageSlider;
