export default function Token({ symbol, price, percent }: {
    symbol: string,
    price: string,
    percent: string
}) {
    return <li>{symbol}  ${price} {percent}%</li>
}