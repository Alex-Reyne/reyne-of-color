import type {Metadata} from 'next';
import {Metamorphous} from 'next/font/google';
import {Analytics} from '@vercel/analytics/next';
import './globals.css';

const metamorphous = Metamorphous({
	weight: '400',
	subsets: ['latin'],
	variable: '--font-metamorphous',
});

export const metadata: Metadata = {
	title: 'Reyne of Color',
	description: 'Custom miniature painting by Alexander Reyne',
	openGraph: {
		title: 'Reyne of Color',
		description: 'Custom miniature painting by Alexander Reyne',
		images: [
			{
				url: '/high-priestess.jpg',
				width: 1200,
				height: 630,
				alt: 'Reyne of Color - Custom Miniature Painting',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Reyne of Color',
		description: 'Custom miniature painting by Alexander Reyne',
		images: ['/high-priestess.jpg'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={metamorphous.variable}>
				{children}
				<Analytics />
			</body>
		</html>
	);
}
