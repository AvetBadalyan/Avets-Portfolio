export const primaryColors = [
    { className: 'color-3' },
    { className: 'color-4' },
    { className: 'color-2' }
]

export const backgroundColors = [
    { className: 'bg-1' },
    { className: 'bg-2' }
]

export const primaryColorClassNames = primaryColors.map(({ className }) => className)
export const backgroundColorClassNames = backgroundColors.map(({ className }) => className)

export const defaultThemeState = {
    primary: 'color-3',
    background: 'bg-1'
}
