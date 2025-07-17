import React, { useEffect, useState } from "react";

export const LoadMoreData = () => {
	const [loading, setLoading] = useState(false);
	const [products, setProducts] = useState([]);
	const [count, setCount] = useState(0);
	const [disableButton, setDisableButton] = useState(false);

	const fetchProducts = async () => {
		try {
			setLoading(true);
			const response = await fetch(
				`https://dummyjson.com/products?limit=20&skip=${
					count === 0 ? 0 : count * 20
				}`
			);

			const result = await response.json();

			if (result && result.products && result.products.length) {
				setProducts((prevData) => [...prevData, ...result.products]);
				setLoading(false);
			}

			console.log(result);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchProducts();
	}, [count]);

	useEffect(() => {
		if (products && products.length === 100) setDisableButton(true);
	});

	if (loading) {
		return <div>Loading data! Please wait :)</div>;
	}

	return (
		<div
			className="container
		flex flex-col gap-5 p-20"
		>
			<div
				className="product-container
			grid grid-cols-4 gap-3"
			>
				{products && products.length
					? products.map((item) => (
							<div
								className="product
							p-5 border-2 border-zinc-500 flex flex-col gap-2"
								key={item.id}
							>
								<img src={item.thumbnail} alt={item.title} />
								<p>{item.title}</p>
							</div>
					  ))
					: null}
			</div>
			<div
				className="button-container
			flex justify-center items-center flex-col"
			>
				<button
					onClick={() => setCount(count + 1)}
					disabled={disableButton}
					className="bg-gray-100 px-5 py-2 rounded-lg cursor-pointer hover:bg-gray-600 hover:text-white transition duration-300"
				>
					Load More
				</button>
				{disableButton ? <p>You have reached 100 products</p> : null}
			</div>
		</div>
	);
};
