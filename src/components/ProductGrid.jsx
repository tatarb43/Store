import React from 'react'
import ProductCard from './ProductCard/ProductCard'
import Modal from './Modal/Modal'
import { useState } from 'react'


export default function ProductGrid({ items }){
    const [modal, setModal] = useState(false)
    return (
        <div className="products" >
            {items.map(p => <ProductCard key={p.id} product={p} />)}
        </div>
    )
}