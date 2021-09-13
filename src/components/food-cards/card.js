import React from 'react';
import '../../variables.css';
import './card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faRupeeSign, faShoppingBag } from '@fortawesome/fontawesome-free-solid';
import pizza from '../../assets/img/pizza-2.jpg';
import burger from '../../assets/img/Burger.jpg';
import buritos from '../../assets/img/buritos.jpg';
import toast from '../../assets/img/toast.jpg';
import drumstick from '../../assets/img/Drumsticks.jpg';
import frenchfries from '../../assets/img/frenchfries.jpg';
import marshmellow from '../../assets/img/Marshmellow.webp';
import momos from '../../assets/img/Momos.jpg';
import pasta from '../../assets/img/pasta.jpg';
import wings from '../../assets/img/wings.jpg';
import sandwitch from '../../assets/img/sandwitch.jpeg';
import biryani from '../../assets/img/biryani.jpeg';


const Card = () => {

    return (
        <div className="card-container">
            <div className="card">
                <img src={pizza} alt="" />
                <div className='content'>
                    <h2>Double Cheese Pizza</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />199</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={burger} alt="" />
                <div className='content'>
                    <h2>Cheese Burger</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />249</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
                <img src={buritos} alt="" />
                <div className='content'>
                    <h2>Buritos</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />169</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={toast} alt="" />
                <div className='content'>
                    <h2>Butter Toast</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />99</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={drumstick} alt="" />
                <div className='content'>
                    <h2>Chicken Drumsticks</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />399</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={frenchfries} alt="" />
                <div className='content'>
                    <h2>French Fries</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />49</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={marshmellow} alt="" />
                <div className='content'>
                    <h2>Marshmellow</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />149</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={momos} alt="" />
                <div className='content'>
                    <h2>Chicken Cheese Momos</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />129</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={wings} alt="" />
                <div className='content'>
                    <h2>Double Crispy Wings</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />229</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={pasta} alt="" />
                <div className='content'>
                    <h2>Paneer Pasta</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />159</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={biryani} alt="" />
                <div className='content'>
                    <h2>Chicken Biryani</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />499</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
            <div className="card">
            <img src={sandwitch} alt="" />
                <div className='content'>
                    <h2>Chicken Sandwitch</h2>
                    <p className="price"><span>Price - </span><FontAwesomeIcon icon={faRupeeSign} />79</p>
                    <div className="buttons">
                        <button className="btn btn-cart"><span>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </span>Add to Cart</button>
                        <button className="btn btn-order">
                            <span>
                                <FontAwesomeIcon icon={faShoppingBag} />
                            </span>Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;