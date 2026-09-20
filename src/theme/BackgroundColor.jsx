import { useTheme } from '../context/theme-context'

const backgroundLabels = {
	'bg-1': 'Light mode',
	'bg-2': 'Dark mode',
};

const BackgroundColor = ({ className }) => {
	const { themeHandler, themeState } = useTheme()
	const isSelected = themeState.background === className;

	return (
		<button
			type="button"
			className={className}
			onClick={() => themeHandler(className)}
			aria-label={backgroundLabels[className] || `${className} background`}
			aria-pressed={isSelected}
		/>
	)
}

export default BackgroundColor
