'use client'

import CardProduto from "./CardProduto"

export default function ListProdutos({lista}) {
    return (
        lista.map((prod) => 
            <CardProduto key={prod.id} produto={prod}></CardProduto>
        )
    )
}