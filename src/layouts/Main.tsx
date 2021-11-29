import AppHeader from '../components/AppHeader'
import { IAppProps } from '../../interfaces/IAppProps'

const Main = ({ children }: IAppProps) => {
    return (
        <>
            <AppHeader />
            <main className="min-h-screen h-screen px-4">{children}</main>
        </>
    )
}

export default Main
