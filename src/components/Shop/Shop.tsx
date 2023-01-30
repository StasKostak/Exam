import './Shop.css'
import { Typography } from '@mui/material'
import shopArray from './shopArray'
import { useState } from 'react'

export type ProductsProps = {
    title: string
    desc: string
    price: number
}

type Props = {}
const Shop = (props: Props) => {
    const [count, setCount] = useState<number>(1)

    const changeCountUSD = () => {
        setCount((count: number) => 1)
    }
    const changeCountEUR = () => {
        setCount((prevState: number) => 0.92)
    }
    const changeCountUAH = () => {
        setCount((prevState: number) => 36.76)
    }
    const changeCountGPB = () => {
        setCount((prevState: number) => 0.81)
    }

    return (
        <>
            <div className="container">
                <Typography
                    variant="h4"
                    align="center"
                    sx={{
                        marginBottom: '40px',
                    }}
                    component="h1"
                >
                    Our shop page
                </Typography>
                <div className="currency">
                    <button onClick={() => changeCountUSD()}>USD</button>
                    <button onClick={() => changeCountEUR()}>EUR</button>
                    <button onClick={() => changeCountUAH()}>UAH</button>
                    <button onClick={() => changeCountGPB()}>GPB</button>
                </div>
                <div className="cards">
                    {shopArray.map(({ title, desc, price }: ProductsProps) => (
                        <div className="card">
                            <h3>{title}</h3>
                            <p>{desc}</p>
                            <p>{price * count}</p>
                            <button>Bye</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default Shop
