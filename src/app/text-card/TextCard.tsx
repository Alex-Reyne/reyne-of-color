import styles from './text-card.module.css';

interface TextCardProps {
	icon: React.ReactNode;
	heading: string;
	paragraph: string;
	className?: string;
}

export default function TextCard({
	icon,
	heading,
	paragraph,
	className = '',
}: TextCardProps) {
	return (
		<div className={`${styles.card} ${className}`}>
			<div className={styles.iconContainer}>{icon}</div>
			<h3 className={styles.heading}>{heading}</h3>
			<p className={styles.paragraph}>{paragraph}</p>
		</div>
	);
}
