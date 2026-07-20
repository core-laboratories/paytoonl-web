import React from "react";
import { AudioLines, BadgeCheck, Globe2, PhoneCall, ShieldCheck } from "lucide-react";

const features = [
	{
		icon: PhoneCall,
		title: "A Phone Call Is the Connection",
		description: "VoiceTx carries a prepared transaction over an ordinary voice call, so sending does not depend on mobile data or Wi-Fi."
	},
	{
		icon: AudioLines,
		title: "Data Transmitted as Sound",
		description: "The transaction is converted into audio tones that travel through the call and are decoded by the receiving service."
	},
	{
		icon: ShieldCheck,
		title: "Protected Against Transmission Errors",
		description: "Built-in validation checks make sure the complete transaction arrived correctly before it is accepted for processing."
	},
	{
		icon: Globe2,
		title: "Designed for Local Access",
		description: "Dedicated service numbers will be available by country, making VoiceTx practical for people wherever phone service is available."
	}
];

const VoiceTx = () => {
	return (
		<section className="container mx-auto flex flex-col gap-12 px-4 lg:px-0">
			<div className="flex flex-col justify-between gap-10 lg:flex-row">
				<div className="flex flex-col justify-center sm:text-center lg:w-5/12 lg:py-16 lg:text-left">
					<h1 className="mb-6 text-4xl font-bold text-black sm:text-5xl md:text-6xl">VoiceTx</h1>
					<p className="mb-6 leading-relaxed text-gray-500 xl:text-lg">
						VoiceTx lets you send a transaction through a phone call. Your device prepares and signs the transaction, converts it into sound, and transmits it securely to the VoiceTx service for processing.
					</p>
					<p className="leading-relaxed text-gray-500 xl:text-lg">
						It is a simple way to move transaction data when internet access is unavailable or unreliable. Dedicated service numbers will be provided for supported countries as the service becomes available.
					</p>
				</div>

				<div className="flex min-h-64 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-indigo-100 via-white to-violet-100 shadow-lg lg:w-5/12">
					<div className="rounded-full bg-white p-10 shadow-md">
						<AudioLines className="h-24 w-24 text-indigo-500" aria-hidden="true" />
					</div>
				</div>
			</div>

			<div className="py-6 sm:py-8 lg:py-12">
				<div className="mb-10 text-center md:mb-16">
					<h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">How VoiceTx Helps</h2>
					<p className="mx-auto max-w-screen-md text-gray-500 md:text-lg">
						A dependable bridge between your wallet and the transaction network, using the reach of a voice call.
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
				<BadgeCheck className="mx-auto mb-4 h-9 w-9 text-indigo-500" aria-hidden="true" />
				<h2 className="mb-4 text-2xl font-bold text-gray-800 md:text-3xl">Simple from Start to Finish</h2>
				<p className="mx-auto max-w-screen-md leading-relaxed text-gray-500 md:text-lg">
					Prepare the transaction in a supported application, call the VoiceTx service for your country, and let the application transmit it. The service receives and verifies the full message before passing it on for processing.
				</p>
			</div>
		</section>
	);
};

export default VoiceTx;
