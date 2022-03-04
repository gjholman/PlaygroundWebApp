import { CubeTransparentIcon } from '@heroicons/react/solid';

export default () => {
	return (
		<div className="min-h-screen bg-gray-900 text-gray-100 font-mono">
			<div id="navbar" className="width-full shadow-md h-16 flex flex-row justify-items-center justify-center ">
				<div className="flex flex-row justify-between w-3/4 max-w-6xl my-auto">
					<span>
						<CubeTransparentIcon className="h-8" />
					</span>
					<span className="flex flex-row gap-8">
						<a>Home</a>
						<a>About Me</a>
						<a>Resume</a>
					</span>
				</div>
			</div>
			<main className="mx-auto w-full grid md:grid-cols-12 grid-cols-6 bg-gray-800 max-w-7xl">
				<div className="col-span-6 uppercase px-8 flex flex-col align-middle my-auto text-right float-right align-end">
					Hello, World.
					<button className="bg-indigo-500 py-4 px-8 rounded-lg w-60 ">Explore</button>
				</div>
				<img
					id="photo-self-antelope"
					src="/src/img/self-photography-antelope.jpg"
					alt="Picture"
					className="col-span-6 overflow-hidden object-cover min-h-60 w-full"
				/>
			</main>
		</div>
	);
};
