import React from "react";
import { ArrowRight, Building2, Check, Code2, Globe2, Landmark, MessageSquareText, RadioTower, ShieldCheck, Smartphone, WalletCards } from "lucide-react";

type VisualFrameProps = { label: string; index: string; description: string; children: React.ReactNode };

const VisualFrame = ({ label, index, description, children }: VisualFrameProps) => (
	<div className="solution-motion" role="img" aria-label={description}>
		<div className="solution-motion-top"><span>{label}</span><span>{index}</span></div>
		<div className="solution-motion-stage">{children}</div>
		<div className="solution-motion-bottom"><span>PAYTO ALLIANCE</span><span>CONNECTED BY DESIGN</span></div>
	</div>
);

export const CoreBankingVisual = () => (
	<VisualFrame label="CONNECTED SETTLEMENT" index="CORE / 01" description="Animated diagram of financial providers exchanging instructions through Coreclear">
		<div className="solution-motion-network">
			<div className="solution-motion-network-node solution-motion-network-node-left"><Building2 size={29} aria-hidden="true" /><span>Provider A</span></div>
			<div className="solution-motion-network-line"><i /></div>
			<div className="solution-motion-network-hub"><Landmark size={38} aria-hidden="true" /><strong>Coreclear</strong><small>Shared connection</small></div>
			<div className="solution-motion-network-line"><i /></div>
			<div className="solution-motion-network-node solution-motion-network-node-right"><WalletCards size={29} aria-hidden="true" /><span>Provider B</span></div>
		</div>
		<div className="solution-motion-caption"><Check size={15} aria-hidden="true" /> Instructions travel across connected providers</div>
	</VisualFrame>
);

export const FinTagVisual = () => (
	<VisualFrame label="DOMAIN-BASED DISCOVERY" index="FINTAG / 01" description="Animated browser metadata flowing from a website to a compatible payment app">
		<div className="solution-motion-discovery">
			<div className="solution-motion-browser"><div className="solution-motion-browser-bar"><i /><i /><i /><span>your-domain.example</span></div><div className="solution-motion-browser-content"><Globe2 size={33} aria-hidden="true" /><strong>Your website</strong><span>&lt;meta property="ican:xcb" /&gt;</span></div></div>
			<div className="solution-motion-discovery-flow"><Code2 size={23} aria-hidden="true" /><ArrowRight size={24} aria-hidden="true" /></div>
			<div className="solution-motion-discovery-app"><Smartphone size={32} aria-hidden="true" /><strong>Compatible app</strong><small>Payment details found</small><Check size={18} aria-hidden="true" /></div>
		</div>
	</VisualFrame>
);

export const ICANVisual = () => (
	<VisualFrame label="A CHECKABLE ADDRESS" index="ICAN / 01" description="Animated ICAN address showing network prefix, check digits, and wallet data">
		<div className="solution-motion-address"><div className="solution-motion-address-string"><span>CB</span><span>71</span><span>47879011EA207DF5B35A24CA6F0859DCFB145999</span></div><div className="solution-motion-address-labels"><span>NETWORK</span><span>CHECK</span><span>WALLET DATA</span></div><div className="solution-motion-address-check"><ShieldCheck size={19} aria-hidden="true" /> Check digits help catch input errors</div></div>
	</VisualFrame>
);

export const ORICVisual = () => (
	<VisualFrame label="PROVIDER IDENTITY" index="ORIC / 01" description="Animated ORIC identifier revealing provider, country, address type, and optional asset">
		<div className="solution-motion-oric"><div className="solution-motion-oric-code"><span>PING</span><span>CH</span><span>B2</span><span>XCB</span></div><div className="solution-motion-oric-labels"><span>PROVIDER</span><span>COUNTRY</span><span>ADDRESS</span><span>ASSET</span></div><div className="solution-motion-oric-note"><Building2 size={18} aria-hidden="true" /> One code identifies a provider’s wallet service</div></div>
	</VisualFrame>
);

export const TxMSVisual = () => (
	<VisualFrame label="TRANSACTION BY TEXT" index="TXMS / 01" description="Animated signed transaction message moving over SMS to a checking receiver">
		<div className="solution-motion-sms"><div className="solution-motion-sms-device"><Smartphone size={29} aria-hidden="true" /><strong>Signed</strong><small>Transaction ready</small></div><div className="solution-motion-sms-route"><RadioTower size={25} aria-hidden="true" /><div><i /></div><span>SMS DELIVERY</span></div><div className="solution-motion-sms-device"><MessageSquareText size={29} aria-hidden="true" /><strong>Received</strong><small>Check &amp; forward</small></div></div>
	</VisualFrame>
);
