import React from "react";
import { Home, SearchX } from "lucide-react";

const NotFound = () => {
	return (
		<section className="bg-white">
			<div className="container mx-auto px-4 py-20 sm:px-6 lg:px-0 lg:py-28">
				<div className="mx-auto max-w-screen-md text-center">
					<div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-500 shadow-sm ring-1 ring-indigo-100">
						<SearchX className="h-10 w-10" aria-hidden="true" />
					</div>

					<p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-indigo-500">
						404 Not Found
					</p>
					<h1 className="mb-6 text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
						Page not found
					</h1>
					<p className="mx-auto mb-10 max-w-2xl text-lg leading-8 text-gray-500">
						The page you are looking for does not exist or may have been moved.
					</p>

					<a
						href="/"
						className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-500 px-8 py-3 text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base"
					>
						<Home className="h-5 w-5" aria-hidden="true" />
						Return to home
					</a>
				</div>
			</div>
		</section>
	);
};

export default NotFound;
