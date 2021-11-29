import { useMemo } from 'react'
import { IAppProps } from '../../interfaces/IAppProps'

interface ICaretProps extends IAppProps {
    up?: boolean
}
const CaretIcon = ({ up, ...props }: IAppProps) => {
    const computedStyles = useMemo(() => {
        return `${props.className} ${up && 'transform rotate-180'}`
    }, [props.className, up])

    return (
        <svg
            enableBackground="new 0 0 29 14"
            height="14px"
            id="Layer_1"
            version="1.1"
            viewBox="0 0 29 14"
            width="29px"
            xmlSpace="preserve"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            className={computedStyles}
        >
            <polygon fill="fill-current" points="0.15,0 14.5,14.35 28.85,0 " />
        </svg>
    )
}

export default CaretIcon
