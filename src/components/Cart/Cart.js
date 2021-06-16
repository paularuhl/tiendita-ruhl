import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash, faFastBackward } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col, ListGroup } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import './Cart.scss'

const Cart = () => {
    const { cart, removeItem, clear } = useCartContext();
    cart.totalItems = cart.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    return (
        <Container>
            <Row>
                <Col md={9}>
                    <ListGroup>
                        {cart.length > 0 ?
                            cart.map((item) => (
                                <ListGroup.Item >
                                    <div className='item-detail-cart-card'>
                                        <img src={item.pictureUrl} width='100' alt={`cover of ${item.title}`} />
                                        <div className='inner-card'>
                                            <h5>{item.quantity}x {item.title} <span>${item.price}</span></h5>
                                        </div>
                                        <button type="button" className="btn" onClick={() => removeItem(item)}>
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </div>
                                </ListGroup.Item>
                            )
                            ) : <ListGroup.Item >
                                <div className='empty-cart-card'>
                                    <h5>El carrito se encuentra vacío por ahora...</h5>
                                    <NavLink to={`/`}>
                                        <button type="button" className="btn" >
                                            <FontAwesomeIcon icon={faFastBackward} /> Volver al listado. 
                                        </button>
                                    </NavLink>
                                </div>
                            </ListGroup.Item>}
                            <div>
                            <button type="button" className="btn btn-danger" onClick={clear} disabled={cart.length === 0}>Vaciar carrito</button>
                        </div>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <div className="inner-card">
                        <h5>Total - <span> $ {cart.totalItems} </span></h5>
                        <button type="button" className="btn buy" disabled={cart.length === 0}>Comprar</button>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Cart;