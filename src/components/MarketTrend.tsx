import MarketTrendRow from './MarketTrendRow'

const MarketTrend = ({ className }: { className?: string }) => {
    return (
        <div className={`transparent-container ${className}`}>
            <h1 className="text-xl font-bold text-white">Market Trend</h1>
            <table className="w-full text-center mt-4">
                <tr className="text-sm text-white text-opacity-60">
                    <th className="text-left">Name</th>
                    <th>Last Price</th>
                    <th className="text-right">24h Change</th>
                </tr>
                <MarketTrendRow />
                <MarketTrendRow />
                <MarketTrendRow />
                <MarketTrendRow />
                <MarketTrendRow />
            </table>
        </div>
    )
}

MarketTrend.defaultProps = {
    className: '',
}

export default MarketTrend
