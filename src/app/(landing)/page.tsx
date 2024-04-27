import { landingHelpProps } from '@/helps/landing.help';
import LandingPageClient from './_pages/LandingPage';
import { promises as fs } from 'fs';

export default async function LandingPage() {
	const file = await fs.readFile(
		process.cwd() + '/src/assets/landingData.json',
		'utf8'
	);
	const data: landingHelpProps = JSON.parse(file);
	return (
		<>
			<LandingPageClient landingInformation={data} />
		</>
	);
}
