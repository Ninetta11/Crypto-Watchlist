
export default function Token({ symbol, price, percent }: {
    symbol: string,
    price: string,
    percent: string
}) {

    return <li><img src={`/icon/${symbol ? symbol : "generic"}.png`} /> {symbol}  ${price} {percent}%</li>
}