import Image from 'next/image';
import { LinkBtn } from '../LinkBtn/LinkBtn';
import styles from './Contact.module.scss';
import { ContactProps } from './Contact.props';

export function Contact({ links, social, ...props }: ContactProps) {
	return (
		<div className={styles.wrapperContact}>
			<div className={styles.wrapper} {...props}>
				<Image
					width={167}
					height={181}
					src="/landing/avatar.png"
					alt="Avatar user"
					priority={false}
					draggable={false}
					className={styles.avatar}
				/>
				<div className={styles.infoWrapper}>
					<h2 className={styles.title}>Let’s stay connected</h2>
					<div className={styles.socialWrapper}>
						{social.map((socialItem, index) => (
							<LinkBtn social={true} key={index} urls={socialItem.url}>
								{socialItem.name}
							</LinkBtn>
						))}
					</div>
					<a href="mailto:contact@tiddle.app" className={styles.email}>
						contact@tiddle.app
					</a>
				</div>
				<Image
					width={159}
					height={44}
					draggable={false}
					src="/landing/logo.png"
					alt="Name project"
					priority={false}
				/>
				<div className={styles.links}>
					{links.map((link, index) => (
						<LinkBtn key={index} urls={link.url}>
							{link.name}
						</LinkBtn>
					))}
				</div>
			</div>
			<LinkBtn design={true} urls="#">
				Designed by Anastasia Gorshkova
			</LinkBtn>
		</div>
	);
}
