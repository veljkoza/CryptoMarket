import { FormEventHandler, FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import AppInput from '../components/AppInput'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit: FormEventHandler<HTMLFormElement> = (
        e: FormEvent<HTMLFormElement>
    ) => {
        e.preventDefault()
        navigate('/')
    }

    return (
        <div className="h-screen w-full grid place-items-center px-4">
            <form onSubmit={handleSubmit} className=" w-1/4 max-w-xl">
                <h1 className="text-2xl text-white">Welcome</h1>
                <AppInput
                    type="email"
                    placeholder="Email address"
                    className="mt-5 mb-6 mx-auto"
                />
                <button
                    type="submit"
                    className="text-white bg-primary px-4 py-3 w-32 rounded-lg"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default Login
