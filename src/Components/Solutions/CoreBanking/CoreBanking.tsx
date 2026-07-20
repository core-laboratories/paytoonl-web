import React from "react";
import { ArrowLeftRight, Building2, CircleCheck, Landmark, Network, WalletCards } from "lucide-react";

const features = [
	{
		icon: Network,
		title: "One Settlement Connection",
		description: "Connect your application to Coreclear and reach participating financial providers through a shared settlement layer."
	},
	{
		icon: ArrowLeftRight,
		title: "Digital and Fiat Rails",
		description: "Move value between digital currencies and traditional financial systems through connected providers."
	},
	{
		icon: Building2,
		title: "Provider-to-Provider Settlement",
		description: "Support transfers between financial providers using established Nostro and Vostro account relationships."
	},
	{
		icon: WalletCards,
		title: "Built for Modern Services",
		description: "Give banks, fintech applications, and digital wallets a consistent foundation for processing and settling transactions."
	}
];

const CoreBanking = () => {
	return (
		<section className="container mx-auto flex flex-col gap-12 px-4 lg:px-0">
			<div className="flex flex-col justify-between gap-10 lg:flex-row">
				<div className="flex flex-col justify-center sm:text-center lg:w-5/12 lg:py-16 lg:text-left">
					<h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:text-6xl">Core Banking</h1>
					<p className="mb-6 leading-relaxed text-gray-500 xl:text-lg">
						Core Banking connects financial applications and providers to the Coreclear network, creating a shared path for processing and settling transactions.
					</p>
					<p className="leading-relaxed text-gray-500 xl:text-lg">
						It helps banks, fintech companies, and wallets bridge traditional accounts with digital payment services while keeping settlement clear, coordinated, and easier to integrate.
					</p>
				</div>

				<div className="flex min-h-64 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-white to-blue-100 shadow-lg lg:w-5/12">
					<div className="rounded-full bg-white p-10 shadow-md">
						<Landmark className="h-24 w-24 text-indigo-500" aria-hidden="true" />
					</div>
				</div>
			</div>

			<div className="py-6 sm:py-8 lg:py-12">
				<div className="mb-10 text-center md:mb-16">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Connected Settlement Infrastructure</h2>
					<p className="mx-auto max-w-screen-md text-gray-500 md:text-lg">
						A practical foundation for financial services that need to exchange and settle value across systems.
					</p>
				</div>

				<div className="grid gap-6 sm:grid-cols-2">
					{features.map((feature) => {
						const Icon = feature.icon;
						return (
							<div key={feature.title} className="group rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md">
								<div className="mb-4 inline-flex rounded-lg bg-indigo-50 p-3 transition-colors group-hover:bg-indigo-100">
									<Icon className="h-6 w-6 text-indigo-500" aria-hidden="true" />
								</div>
								<h3 className="mb-3 text-lg font-semibold text-gray-800">{feature.title}</h3>
								<p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
							</div>
						);
					})}
				</div>
			</div>

			<div className="rounded-xl bg-gray-50 px-6 py-10 text-center md:px-10">
				<CircleCheck className="mx-auto mb-4 h-9 w-9 text-indigo-500" aria-hidden="true" />
				<h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">How It Works</h2>
				<p className="mx-auto max-w-screen-md leading-relaxed text-gray-500 md:text-lg">
					A participating financial provider registers for an ORIC identifier and connects its application to Coreclear. Transactions can then be routed between connected providers, with settlement handled through the appropriate accounts and payment rails.
				</p>
			</div>
		</section>
	);
};

export default CoreBanking;
