export type ProductsProps = {
    title:string
    desc:string  
    price:number   
}

const productsArray:ProductsProps []= [
    {       
        title:"iPhone X",
        desc: "this is iPhone X",
        price: 500,
    },
    {       
        title:"iPhone XS",
        desc: "this is iPhone XS",     
        price: 1000,      
    },
    {       
        title:"Samsung s21",
        desc: "this is Samsung s21",       
        price: 1500,
    }
]

export default productsArray