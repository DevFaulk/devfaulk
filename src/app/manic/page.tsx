import {
	Avatar,
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
} from '../resources';
import TableOfContents from '@/app/manic/components/TableOfContents';
import styles from '@/app/manic/manic.module.scss';

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

export default function manic() {
	return (
		<Flex fillWidth maxWidth="m" direction="column">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Person',
						name: person.name,
						jobTitle: person.role,
						description: manicData.intro.description,
						url: `https://manic.studio`,
						image: `${baseURL}/images/${person.avatar}`,
						sameAs: social
							.filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
							.map((item) => item.link),
						worksFor: {
							'@type': 'Organization',
							name: manicData.work.experiences[0].company || '',
						},
					}),
				}}
			/>
			<Flex fillWidth mobileDirection="column" justifyContent="center">
				{manicData.avatar.display && (
					<Flex
						minWidth="160"
						paddingX="l"
						paddingBottom="xl"
						gap="m"
						flex={3}
						direction="column"
						alignItems="center">
						<Avatar src={person.avatar} size="xl" />
						<Flex gap="8" alignItems="center">
							<Icon onBackground="accent-weak" name="globe" />
							{person.location}
						</Flex>
						{person.languages.length > 0 && (
							<Flex wrap gap="8">
								{person.languages.map((language, index) => (
									<Tag key={index} size="l">
										{language}
									</Tag>
								))}
							</Flex>
						)}
					</Flex>
				)}
				<Flex
					className={styles.blockAlign}
					fillWidth
					flex={9}
					maxWidth={40}
					direction="column">
					<Flex
						id={manicData.intro.title}
						fillWidth
						minHeight="160"
						direction="column"
						justifyContent="center"
						marginBottom="32">
						<Heading className={styles.textAlign} variant="display-strong-xl">
							{person.name}
						</Heading>
						<Text
							className={styles.textAlign}
							variant="display-default-xs"
							onBackground="neutral-weak">
							{person.role}
						</Text>
						{social.length > 0 && (
							<Flex
								className={styles.blockAlign}
								paddingTop="20"
								paddingBottom="8"
								gap="8"
								wrap>
								{social.map(
									(item) =>
										item.link && (
											<Button
												key={item.name}
												href={item.link}
												prefixIcon={item.icon}
												label={item.name}
												size="s"
												variant="tertiary"
											/>
										)
								)}
							</Flex>
						)}
					</Flex>

					{manicData.intro.display && (
						<Flex
							direction="column"
							textVariant="body-default-l"
							fillWidth
							gap="m"
							marginBottom="xl">
							{manicData.intro.description}
						</Flex>
					)}

					{manicData.work.display && (
						<>
							<Heading
								as="h2"
								id={manicData.work.title}
								variant="display-strong-s"
								marginBottom="m">
								{manicData.work.title}
							</Heading>
							<Flex direction="column" fillWidth gap="l" marginBottom="40">
								{manicData.work.experiences.map((experience, index) => (
									<Flex
										key={`${experience.company}-${experience.role}-${index}`}
										fillWidth
										direction="column">
										<Flex
											fillWidth
											justifyContent="space-between"
											alignItems="flex-end"
											marginBottom="4">
											<Text id={experience.company} variant="heading-strong-l">
												{experience.company}
											</Text>
											<Text
												variant="heading-default-xs"
												onBackground="neutral-weak">
												{experience.timeframe}
											</Text>
										</Flex>
										<Text
											variant="body-default-s"
											onBackground="brand-weak"
											marginBottom="m">
											{experience.role}
										</Text>
										<Flex as="ul" direction="column" gap="16">
											{experience.achievements.map((achievement, index) => (
												<Text
													as="li"
													variant="body-default-m"
													key={`${experience.company}-${index}`}>
													{achievement}
												</Text>
											))}
										</Flex>
										{experience.images.length > 0 && (
											<Flex fillWidth paddingTop="m" paddingLeft="40" wrap>
												{experience.images.map((image, index) => (
													<Flex
														key={index}
														border="neutral-medium"
														borderStyle="solid-1"
														radius="m"
														minWidth={image.width}
														height={image.height}>
														<SmartImage
															enlarge
															radius="m"
															sizes={image.width.toString()}
															alt={image.alt}
															src={image.src}
														/>
													</Flex>
												))}
											</Flex>
										)}
									</Flex>
								))}
							</Flex>
						</>
					)}

					{manicData.studies.display && (
						<>
							<Heading
								as="h2"
								id={manicData.studies.title}
								variant="display-strong-s"
								marginBottom="m">
								{manicData.studies.title}
							</Heading>
							<Flex direction="column" fillWidth gap="l" marginBottom="40">
								{manicData.studies.institutions.map((institution, index) => (
									<Flex
										key={`${institution.name}-${index}`}
										fillWidth
										gap="4"
										direction="column">
										<Text id={institution.name} variant="heading-strong-l">
											{institution.name}
										</Text>
										<Text
											variant="heading-default-xs"
											onBackground="neutral-weak">
											{institution.description}
										</Text>
									</Flex>
								))}
							</Flex>
						</>
					)}

					{manicData.technical.display && (
						<>
							<Heading
								as="h2"
								id={manicData.technical.title}
								variant="display-strong-s"
								marginBottom="40">
								{manicData.technical.title}
							</Heading>
							<Flex direction="column" fillWidth gap="l">
								{manicData.technical.skills.map((skill, index) => (
									<Flex
										key={`${skill}-${index}`}
										fillWidth
										gap="4"
										direction="column">
										<Text variant="heading-strong-l">{skill.title}</Text>
										<Text variant="body-default-m" onBackground="neutral-weak">
											{skill.description}
										</Text>
										{(skill.images?.length ?? 0) > 0 && (
											<Flex fillWidth paddingTop="m" gap="12" wrap>
												{(skill.images ?? []).map((image, index) => (
													<Flex
														key={index}
														border="neutral-medium"
														borderStyle="solid-1"
														radius="m"
														minWidth={image.width}
														height={image.height}>
														<SmartImage
															enlarge
															radius="m"
															sizes={image.width.toString()}
															alt={image.alt}
															src={image.src}
														/>
													</Flex>
												))}
											</Flex>
										)}
									</Flex>
								))}
							</Flex>
						</>
					)}
				</Flex>
			</Flex>
		</Flex>
	);
}
