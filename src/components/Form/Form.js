import React, { useState} from 'react';
import './Form.scss';

const Form = ({ createOrder, orderId }) => {

    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: ''
    })

    const getContactData = (e) => {
        const { name, value } = e.target
        setForm((state) => {
            return { ...state, [name]: value }
        })
    }

    const handlePurchase = (e) => {
        e.preventDefault();
        createOrder(form);
    }

    return (
        <>
            {orderId ?
                <>
                    <h2> Orden realizada con ID: {orderId}</h2>
                </>
                :
                <>
                    <h2>Datos de Contacto</h2>
                    <form >
                        <div>
                            <input placeholder="Nombre y Apellido" name="name" value={form.name} onChange={getContactData} type="text" />
                        </div>
                        <div>
                            <input placeholder="Correo Electrónico" name="email" value={form.email} onChange={getContactData} type="email" />
                        </div>
                        <div>
                            <input placeholder="Teléfono" name="phone" value={form.phone} onChange={getContactData} type="text" />
                        </div>
                        <button className="btn" onClick={handlePurchase} >Finalizar</button>
                    </form>
                </>
            }
        </>
    )
}
export default Form