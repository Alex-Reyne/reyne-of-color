import styles from './button.module.css';

interface ButtonProps {
	variant?: 'primary' | 'secondary' | 'outline';
	size?: 'sm' | 'md' | 'lg';
	children: React.ReactNode;
	onClick?: () => void;
	disabled?: boolean;
	type?: 'button' | 'submit' | 'reset';
	className?: string;
}

export default function Button({
	variant = 'primary',
	size = 'md',
	children,
	onClick,
	disabled = false,
	type = 'button',
	className = '',
}: ButtonProps) {
	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
		>
			{children}
		</button>
	);
}
