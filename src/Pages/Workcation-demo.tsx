import './App.css';
import { HomeIcon } from '@heroicons/react/solid';

function App() {
	return (
		<div id="body" className="h-screen w-screen">
			<header className="w-screen top-0 h-12 border-b-2 flex flex-row justify-center">
				<h1 id="title" className="font-bold text-4xl text-indigo-700 flex flex-row lg:w-50">
					<HomeIcon className="h-10" /> Workcation
				</h1>
			</header>

			<div className="bg-gray-100 grid lg:grid-cols-2 2xl:grid-cols-5">
				<div
					id="main-card"
					className="px-8 py-12 max-w-md lg:px-12 lg:py-24 lg:max-w-full xl:mr-0 space-y-4 lg:flex lg:flex-row-reverse col-span-2"
				>
					<img
						id="beach-img"
						src="/src/img/stock_beach.jpg"
						alt="beach"
						className="rounded-lg shadow-lg mt-6 sm:mt-8 sm:h-64 sm:w-full sm:object-cover object-centers lg:col-start-2 lg:col-end-3"
					/>

					<div>
						<h2 id="hook" className="mt-6 text-xl font-bold text-gray-800 sm:mt-8 sm:text-2xl">
							You can work from anywhere.
							<br />
							<span className="text-indigo-500">Take advantage of it.</span>
						</h2>

						<p className="text-sm text-gray-800">
							Workcation helps you find work-friendly-rentals in beautiful locations so you can enjoy some
							nice weather even when you're not on vacation
						</p>

						<div>
							<a
								href="#"
								className="inline-block bg-indigo-500 rounded-lg px-6 py-2 text-gray-100 uppercase font-semibold tracking-wider shadow-md text-sm hover:opacity-75 focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:opacity-100 transition"
							>
								Book your escape
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
