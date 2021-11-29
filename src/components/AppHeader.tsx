import AppInput from './AppInput'
import HomeIcon from './HomeIcon'
import SearchIcon from './SearchIcon'

const AppHeader = () => {
    return (
        <header className="flex p-4  items-center">
            <button
                className="transparent-container h-12 mr-auto"
                type="button"
            >
                <HomeIcon className="text-white text-opacity-75 fill-current" />
            </button>
            <AppInput placeholder="Search">
                <SearchIcon className="h-4 w-4 text-white fill-current  stroke-current" />
            </AppInput>
            <img
                src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=48"
                alt="User Profile"
                className="block ml-4 rounded-lg"
            />
        </header>
    )
}

export default AppHeader
