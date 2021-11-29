import Main from '../layouts/Main'
import MarketTrend from '../components/MarketTrend'

const Dashboard = () => {
    return (
        <Main>
            <div className="flex">
                <MarketTrend className="w-1/3" />
            </div>
        </Main>
    )
}

export default Dashboard
