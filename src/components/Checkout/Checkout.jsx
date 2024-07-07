import './Checkout.css'
import { CartContext } from '../../context/CartContext'
import { useContext, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebase/client'

export function Checkout() {
    const { cart, emptyCart } = useContext(CartContext)
    const navigateTo = useNavigate()

    const PRODUCTS_AMMOUNT = cart.reduce((accumulator, product) => accumulator + product.quantity, 0)
    const TOTAL = cart.reduce((accumulator, product) => accumulator + (product.price * product.quantity), 0)

    const FORM_REF = useRef(null)

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const validateForm = (name, surname, email) => {
        if (name === "") {
            console.log("Por favor completa tu nombre.")
            return false
        }

        if (surname === "") {
            console.log("Por favor completa tu apellido.")
            return false
        }

        if (validateEmail(email) === false) {
            console.log("Por favor completa un email válido.")
            return false
        }

        return true
    }

    const [paymentInProcess, setPaymentInProcess] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        setPaymentInProcess(true)

        const NAME = FORM_REF.current.children[0].elements[0].value.trim()
        const SURNAME = FORM_REF.current.children[0].elements[1].value.trim()
        const EMAIL = FORM_REF.current.children[0].elements[2].value 

        if (validateForm(NAME, SURNAME, EMAIL) === false) 
            return

        const DATE = new Date().toISOString() 
        const ORDER = {
            buyer: {
                name: "Test",
                surname: "User",
                email: "name@example.com"
            },
            items: cart,
            date: DATE,
            total: TOTAL
        }

        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, ORDER).then(({ id }) => {

            alert(`¡Gracias por comprar en Swiftly Cuadernos! Tu número de orden de compra es \n${id}`)

            console.log(id)

            emptyCart()

            navigateTo('/')
        })
    }

    return (
        <>
            <form id="checkoutForm" ref={FORM_REF} onSubmit={handleSubmit}>
                <fieldset>
                    <legend>Formulario de datos personales</legend>

                    <div>
                        <label htmlFor="formName">Nombre</label>
                        <input id="formName" type="text" placeholder="Taylor" required />
                    </div>
                    <div>
                        <label htmlFor="formSurname">Apellido</label>
                        <input id="formSurname" type="text" placeholder="Swift" required />
                    </div>
                    <div>
                        <label htmlFor="formEmail">Email</label>
                        <input id="formEmail" type="email" placeholder="swifties@gmail.com" required />
                    </div>
                </fieldset>
                <button id="formSubmit" type="submit">{paymentInProcess ? "Aguarda unos minutos" : "Finalizar compra"}</button>
            </form>
            <div id="checkoutTotal">
                <div>
                    <h2>Resumen de compra</h2>
                    <div>
                        <h3>Productos ({PRODUCTS_AMMOUNT})<span>{`$ ${TOTAL}`}</span></h3>
                        <h3>Envío<span>GRATIS</span></h3>
                        <h2>Total<span>{`$ ${TOTAL}`}</span></h2>
                    </div>
                    <p>🔒 Protegemos tus datos personales, no los guardamos ni los transferimos</p>
                </div>
            </div>
        </>
    )
}