import './ItemListContainer.css'
import { getProductList } from '../../data/async-mock.js'
import { useEffect, useState } from 'react'
import { ItemList } from '../ItemList/ItemList.jsx'
import { useParams } from 'react-router-dom'

export function ItemListContainer()
{
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const GREETING = "Cargando productos en stock..."
    const ERROR_MESSAGE = "¡Uy! Parece que no hay productos en stock."
    const { categoryId } = useParams()

    useEffect(() => {
        getProductList(categoryId)
            .then(response => setProducts(response))
            .catch(err => console.error(err))
            .finally(() => setLoading(false))

        return setLoading(true);
    }, [categoryId])

    return (
        <>
            {loading ? <h2>{GREETING}</h2> : (products ? <ItemList products={products} /> : <h2>{ERROR_MESSAGE}</h2>)}
        </>
    )
}