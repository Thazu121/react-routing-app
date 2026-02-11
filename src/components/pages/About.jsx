import { Link } from "react-router-dom"
export default function About() {
    return (
        <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 sm:px-8 py-16">
            <div className="bg-white shadow-lg rounded-2xl p-6 sm:p-10 max-w-2xl w-full text-center">
                <h1 className="text-2xl sm:text-3xl font-bold text-indigo-700 mb-6">About </h1>
                <div>
                    <p className="">This application is built using React Router.It demonstrates dynamic routing,route loaders,
                        and responsive design using Tailwind CSS
                    </p>
                </div>

                <div className=" bg-white shadow-md rounded-xl p-6 mb-8">
                    <h2 className="text-xl font-semibold mb-4">Features</h2>
                    <ul className="list-disc list-inside space-y-2 text-slate-700 text-left max-w-md mx-auto px-24">
                        <li>Dynamic  User Routing</li>
                        <li>Loader based data  Fetching</li>
                        <li>Responsive Design</li>
                        <li>Hamburger Navigation Menu</li>
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-xl p-6 ">
                    <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
                    <div className="flex flex-wrap gap-3 px-14 max-w-md mx-auto ">
                        <span className="px-4 py-2  bg-indigo-100 text-indigo-700 rounded-full text-sm">
                            React
                        </span>
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                            React Router</span>
                        <span className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm">
                            Tailwind CSS</span>
                    </div>
                </div>
                <Link to={"/"}>
                    <button className="px-6 py-3 m-9 rounded-lg bg-blue-500 text-white hover:bg-indigo-700 transition duration-300 w-full sm:w-auto">Go Back Home </button> </Link>
            </div>
        </section>
    )
}