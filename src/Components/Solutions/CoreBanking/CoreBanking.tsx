import React from "react";
import { ArrowLeftRight, Building2, CircleCheck, Network, WalletCards } from "lucide-react";
import { CoreBankingVisual } from "../SolutionHeroVisuals.tsx";

const features = [
	{
		icon: Network,
		title: "One Settlement Connection",
		description: "Connect an application to Coreclear to exchange transaction instructions with participating providers."
	},
	{
		icon: ArrowLeftRight,
		title: "Digital and Fiat Rails",
		description: "Support payment flows between digital assets and traditional accounts where participating providers offer the required rails."
	},
	{
		icon: Building2,
		title: "Provider-to-Provider Settlement",
		description: "Coordinate settlement between participating providers using the account relationships and rails available to them."
	},
	{
		icon: WalletCards,
		title: "Built for Modern Services",
		description: "Give banks, fintech applications, and digital wallets a consistent foundation for processing and settling transactions."
	}
];

const CoreBanking = () => {
	return (
		<section className="solution-detail container mx-auto flex flex-col gap-12 px-4 lg:px-0">
			<div className="flex flex-col justify-between gap-10 lg:flex-row">
				<div className="flex flex-col justify-center sm:text-center lg:w-5/12 lg:py-16 lg:text-left">
					<h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:text-6xl">Core Banking</h1>
					<p className="mb-6 leading-relaxed text-gray-500 xl:text-lg">
						Core Banking connects financial applications and providers to the Coreclear network, creating a shared path for processing and settling transactions.
					</p>
					<p className="leading-relaxed text-gray-500 xl:text-lg">
						It helps banks, fintech companies, and wallets connect traditional accounts with digital payment services through a coordinated settlement process.
					</p>
				</div>

				<CoreBankingVisual />
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
					A participating financial provider registers for an ORIC identifier and connects its application to Coreclear. Connected providers can exchange transaction instructions; settlement follows the account relationships and payment rails they support.
				</p>
			</div>
		</section>
	);
};

export default CoreBanking;
