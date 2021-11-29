import CaretIcon from './CaretIcon'

const MarketTrendRow = () => {
    return (
        <tr className="text-center ">
            <td className="text-white text-left">
                BTC <span className="text-white text-opacity-60">Bitcoin</span>
            </td>
            <td className="text-primary text-opacity-80 py-3">$8594</td>
            <td className="flex pt-2.5">
                <div className="flex ml-auto items-center">
                    <span className="text-white block mr-2">2,540</span>
                    <CaretIcon className="h-5 w-4 fill-current text-red-500" />
                </div>
            </td>
        </tr>
    )
}

export default MarketTrendRow
