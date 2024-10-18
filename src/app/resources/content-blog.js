import { InlineCode } from '@/once-ui/components';
import Link from 'next/link';

const person = {
	firstName: 'Theodore',
	lastName: 'Faulk',
	pronounOne: 'He',
	pronounTwo: 'Him',
	pronounThree: 'His', // All pronouns are singular in this context
	get pronouns() {
		return `${this.pronounOne} / ${this.pronounTwo} / ${this.pronounThree}`;
	},
	get name() {
		return `${this.firstName} ${this.lastName}`;
	},
	role: 'Design Engineer',
	avatar: '/images/avatar.jpg',
	location: 'America/New_York', // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
	languages: ['English'], // optional: Leave the array empty if you don't want to display languages
};
const responses = {
	letterTitle: <>Stay up to date with me.</>,
};
const newsletter = {
	display: true,
	title: responses.letterTitle,
	description: (
		<>
			I occasionally write about design, technology, and share thoughts on the
			intersection of creativity and engineering.
		</>
	),
};

const social = [
	// Links are automatically displayed.
	// Import new icons in /once-ui/icons.ts
	{
		name: 'GitHub',
		icon: 'github',
		link: 'https://github.com/devfaulk',
	},
	{
		name: 'LinkedIn',
		icon: 'linkedin',
		link: 'https://www.linkedin.com/in/theodore-faulk-98645628a/',
	},
	{
		name: 'X',
		icon: 'x',
		link: 'https://x.com/faulkteddy',
	},
	{
		name: 'Email',
		icon: 'email',
		link: 'mailto:faulkdev@gmail.com',
	},
];

const home = {
	label: 'Home',
	title: `${person.name}'s Portfolio`,
	description: `Portfolio website showcasing my work as a ${person.role}`,
	headline: <>Developer Designer and Video Editor</>,
	subline: (
		<>
			Hello I am Theo! I am currently an engineer at{' '}
			<InlineCode>BNY</InlineCode>, where I craft intuitive
			<br /> user experiences, and edit videos/make games in my free time.
		</>
	),
};

const about = {
	label: 'About',
	title: 'About me',
	description: `Meet ${person.name}, ${person.role} from ${person.location} pronouns ${person.pronouns}`,
	tableOfContent: {
		display: true,
		subItems: true,
	},
	avatar: {
		display: true,
	},
	calendar: {
		display: true,
		link: 'https://cal.com',
	},
	intro: {
		display: true,
		title: 'Introduction',
		description: (
			<>
				{person.firstName} is a Pittsburgh-based design engineer with a passion
				for transforming complex challenges into simple, elegant design
				solutions. {person.pronounThree} work spans digital interfaces,
				interactive experiences, and the convergence of design, accessibility,
				and technology.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: 'Work Experience',
		experiences: [
			{
				company: 'BNY',
				timeframe: '2022 - Present',
				role: 'Product Support Engineer',
				achievements: [
					<>
						Redesigned the UI/UX for the FLY platform, resulting in a 20%
						increase in user engagement and 30% faster load times.
					</>,
					<>
						Spearheaded the integration of AI tools into design workflows,
						enabling designers to iterate 50% faster.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: '/images/projects/project-01/cover-01.jpg',
						alt: 'Once UI Project',
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: 'BNY',
				timeframe: '2018 - 2022',
				role: 'Shared Services Engineer and Designer',
				achievements: [
					<>
						Developed a design system that unified the brand across multiple
						platforms, improving design consistency by 40%.
					</>,
					<>
						Led a cross-functional team to launch a new product line,
						contributing to a 15% increase in overall company revenue.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: 'Studies',
		institutions: [
			{
				name: 'Community College of Allegheny County',
				description: (
					<>Studying Java video game development, and game design.</>
				),
			},
			{
				name: 'Year Up',
				description: <>Studied 400 hours of front-end development</>,
			},
			{
				name: 'Community College of the Airforce',
				description: <>Studied 60 credits in general sciences.</>,
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: 'Technical skills',
		skills: [
			{
				title: 'Figma',
				description: (
					<>Able to prototype in Figma with Once UI with unnatural speed.</>
				),
				images: [
					{
						src: '/images/projects/project-01/cover-02.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
					{
						src: '/images/projects/project-01/cover-03.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
				],
			},
			{
				title: 'Next.js',
				description: (
					<>Building next gen apps with Next.js + Once UI + Supabase.</>
				),
				images: [
					{
						src: '/images/projects/project-01/cover-04.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
				],
			},
			{
				title: 'React',
				description: <>Building react apps with React + TSX + Vercel</>,
			},
		],
	},
};

const blog = {
	label: 'Blog',
	title: 'Writing about design and tech...',
	description: `Read what ${person.name} has been up to recently`,
	// Create new blog posts by adding a new .mdx file to app/blog/posts
	// All posts will be listed on the /blog route
};

const work = {
	label: 'Work',
	title: 'My projects',
	description: `Design and dev projects by ${person.name}`,
	// Create new project pages by adding a new .mdx file to app/blog/posts
	// All projects will be listed on the /home and /work routes
};

const gallery = {
	label: 'Gallery',
	title: 'My photo gallery',
	description: `A photo collection by ${person.name}`,
	// Images from https://pexels.com
	images: [
		{
			src: '/images/gallery/img-01.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-02.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-03.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-04.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-05.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-06.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-07.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-08.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-09.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-10.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-11.jpg',
			alt: 'image',
			orientation: 'vertical',
		},
		{
			src: '/images/gallery/img-12.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-13.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
		{
			src: '/images/gallery/img-14.jpg',
			alt: 'image',
			orientation: 'horizontal',
		},
	],
};

const manic = {
	label: 'Manic',
	title: 'My Game Studio',
	description: `Game Development Studio called Manic Games Studio by ${person.name}`,
	avatar: {
		display: true,
	},
	intro: {
		display: true,
		title: 'Introduction',
		description: (
			<>
				Game studio based out of Pennsylvania created and established by
				Theodore (Teddy) Faulk Our studio focuses on creating games as
				innovative as they used to be- while also focusing on our delivery of
				accessibility and feature complete games.
			</>
		),
	},
	work: {
		display: true, // set to false to hide this section
		title: 'Work Experience',
		experiences: [
			{
				company: 'BNY',
				timeframe: '2022 - Present',
				role: 'Product Support Engineer',
				achievements: [
					<>
						Redesigned the UI/UX for the FLY platform, resulting in a 20%
						increase in user engagement and 30% faster load times.
					</>,
					<>
						Spearheaded the integration of AI tools into design workflows,
						enabling designers to iterate 50% faster.
					</>,
				],
				images: [
					// optional: leave the array empty if you don't want to display images
					{
						src: '/images/projects/project-01/cover-01.jpg',
						alt: 'Once UI Project',
						width: 16,
						height: 9,
					},
				],
			},
			{
				company: 'BNY',
				timeframe: '2018 - 2022',
				role: 'Shared Services Engineer and Designer',
				achievements: [
					<>
						Developed a design system that unified the brand across multiple
						platforms, improving design consistency by 40%.
					</>,
					<>
						Led a cross-functional team to launch a new product line,
						contributing to a 15% increase in overall company revenue.
					</>,
				],
				images: [],
			},
		],
	},
	studies: {
		display: true, // set to false to hide this section
		title: 'Studies',
		institutions: [
			{
				name: 'Community College of Allegheny County',
				description: (
					<>Studying Java video game development, and game design.</>
				),
			},
			{
				name: 'Year Up',
				description: <>Studied 400 hours of front-end development</>,
			},
			{
				name: 'Community College of the Airforce',
				description: <>Studied 60 credits in general sciences.</>,
			},
		],
	},
	technical: {
		display: true, // set to false to hide this section
		title: 'Technical skills',
		skills: [
			{
				title: 'Figma',
				description: (
					<>Able to prototype in Figma with Once UI with unnatural speed.</>
				),
				images: [
					{
						src: '/images/projects/project-01/cover-02.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
					{
						src: '/images/projects/project-01/cover-03.jpg',
						alt: 'Project image',
						width: 16,
						height: 9,
					},
				],
			},
		],
	},
};

export {
	person,
	social,
	newsletter,
	home,
	about,
	blog,
	work,
	gallery,
	responses,
	manic,
};
