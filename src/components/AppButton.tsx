import { IAppProps } from '../../interfaces/IAppProps'

const AppButton = ({ children, ...props }: IAppProps) => {
    return (
        <button
            type="submit"
            className="text-white bg-primary px-4 py-3  rounded-lg"
            {...props}
        >
            {children}
        </button>
    )
}

export default AppButton
