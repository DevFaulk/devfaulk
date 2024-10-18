import {
	Avatar,
	Background,
	Button,
	Flex,
	Heading,
	Icon,
	IconButton,
	SmartImage,
	Tag,
	Text,
} from '@/once-ui/components';
import {
	person,
	about,
	social,
	baseURL,
	manic as manicData,
	effects,
} from '../resources';
import { Footer, Header, RouteGuard } from '@/app/components';
import { Inter, Source_Code_Pro } from 'next/font/google';
// import { TableOfContents } from '@/app/manic/components/TableOfContents';
import { style } from '@/app/resources/config-minimal.js';
import classNames from 'classnames';
export function generateMetadata() {
	const title = manicData.title;
	const description = manicData.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

const structure = [
	{
		title: manicData.intro.title,
		display: manicData.intro.display,
		items: [],
	},
	{
		title: manicData.work.title,
		display: manicData.work.display,
		items: manicData.work.experiences.map((experience) => experience.company),
	},
	{
		title: manicData.studies.title,
		display: manicData.studies.display,
		items: manicData.studies.institutions.map(
			(institution) => institution.name
		),
	},
	{
		title: manicData.technical.title,
		display: manicData.technical.display,
		items: manicData.technical.skills.map((skill) => skill.title),
	},
];

const primary = Inter({
	variable: '--font-primary',
	subsets: ['latin'],
	display: 'swap',
});

type FontConfig = {
	variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const secondary: FontConfig | undefined = undefined;
const tertiary: FontConfig | undefined = undefined;
/*
 */

const code = Source_Code_Pro({
	variable: '--font-code',
	subsets: ['latin'],
	display: 'swap',
});

interface RootLayoutProps {
	children: React.ReactNode;
}

export default function manic({ children }: RootLayoutProps) {
	return (
		<Flex
			as="html"
			lang="en"
			background="page"
			data-neutral={style.neutral}
			data-brand={style.brand}
			data-accent={style.accent}
			data-solid={style.solid}
			data-solid-style={style.solidStyle}
			data-theme={style.theme}
			data-border={style.border}
			data-surface={style.surface}
			data-transition={style.transition}
			className={classNames(
				primary.variable,
				secondary ? secondary.variable : '',
				tertiary ? tertiary.variable : '',
				code.variable
			)}>
			<Flex
				style={{ minHeight: '100vh' }}
				as="body"
				fillWidth
				margin="0"
				padding="0"
				direction="column">
				<Background
					gradient={effects.gradient}
					dots={effects.dots}
					lines={effects.lines}
				/>
				<Flex fillWidth minHeight="16"></Flex>
				<Header />
				<Flex
					zIndex={0}
					fillWidth
					paddingY="l"
					paddingX="l"
					justifyContent="center"
					flex={1}>
					<Flex justifyContent="center" fillWidth minHeight="0">
						<RouteGuard>{children}</RouteGuard>
					</Flex>
				</Flex>
				<Footer />
			</Flex>
		</Flex>
	);
}
