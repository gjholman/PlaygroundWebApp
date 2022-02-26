import "./App.css";
import { HomeIcon } from "@heroicons/react/solid";

function App() {
  return (
    <div
      id="body"
      className="bg-gray-400 h-screen w-screen flex  justify-center"
    >
      <div
        id="main-card"
        className="max-w-md h-fit shadow-2xl rounded-md px-8 py-8 mt-10 bg-gray-200 space-y-4"
      >
        <h1
          id="title"
          className="font-bold text-2xl text-indigo-700 flex flex-row "
        >
          <HomeIcon className="h-8" /> Workcation
        </h1>
        <img
          id="beach-img"
          src="/src/img/stock_beach.jpg"
          alt="beach"
          className="rounded-lg shadow-lg"
        />

        <h2 id="hook" className="text-xl font-bold text-gray-800">
          You can work from anywhere.
          <br />
          <span className="text-indigo-500">Take advantage of it.</span>
        </h2>

        <p className="text-sm text-gray-800">
          Workcation helps you find work-friendly-rentals in beautiful locations
          so you can enjoy some nice weather even when you're not on vacation
        </p>

        <div>
          <a
            href="#"
            className="inline-block bg-indigo-500 rounded-lg px-4 py-2 text-gray-100 uppercase font-semibold tracking-wider shadow-md text-sm hover:opacity-75 focus:ring focus:ring-offset-2 focus:ring-indigo-500 focus:ring-opacity-50 active:opacity-100 transition"
          >
            Book your escape
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
