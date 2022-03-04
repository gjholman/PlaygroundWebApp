export default () => {
	return (
		<div className="h-screen bg-gray-800 text-gray-100">
			<div id="navbar" className="width-full shadow-md h-16 flex flex-row justify-items-center justify-center ">
				<div className="flex flex-row justify-between w-3/4 max-w-6xl my-auto">
					<span>Icon</span>Home About Me Resume
				</div>
			</div>
			<main className="w-full grid grid-cols-12 text-right bg-gray-600">
				<div className="col-start-1 col-end-6 uppercase">Hello, World.</div>
				<img
					id="photo-self-antelope"
					src="/src/img/self-photography-antelope.jpg"
					alt="Picture"
					className="col-start-7 col-end-12"
				/>
			</main>
		</div>
	);
};
