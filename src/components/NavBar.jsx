import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { BsYoutube, BsSearch } from "react-icons/bs";

export default function NavBar() {
	const { query } = useParams();
	const [text, setText] = useState("");
	const navigator = useNavigate();

	const handleChange = (e) => {
		setText(e.target.value);
	};

	const handleSumbit = (e) => {
		e.preventDefault();
		setText("");
		navigator(`/videos/${text}`);
	};

	useEffect(() => {
		setText(query || "");
	}, [query]);

	return (
		<header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
			<Link to="/" className="flex items-center">
				<BsYoutube className="text-4xl text-brand" />
				<h1 className=" font-bold text-3xl ml-2">YouTube</h1>
			</Link>
			<form className="w-full flex justify-center" onSubmit={handleSumbit}>
				<input
					className="w-7/12 p-2 bg-black text-gray-50 outline-none"
					type="text"
					placeholder="Search..."
					value={text}
					onChange={handleChange}
				/>
				<button className="bg-zinc-600 px-4">
					<BsSearch />
				</button>
			</form>
		</header>
	);
}
