import { useMemo } from 'react'
import { IAppProps } from '../../interfaces/IAppProps'

const AppInput = ({ children, ...props }: IAppProps) => {
    const computedStyles = useMemo(() => {
        const defaultStyles = 'block py-3 text-white transparent-container px-6'

        return `${`${defaultStyles} ${props.className ? props.className : ''} ${
            children ? 'pr-12' : ''
        }`}`
    }, [props.className])

    return (
        <div className="relative">
            <input {...props} className={computedStyles} />
            {children && (
                <button
                    type="submit"
                    className="absolute top-2 right-2 p-2 bg-primary bg-opacity-20 rounded-lg"
                >
                    {children}
                </button>
            )}
        </div>
    )
}

export default AppInput
