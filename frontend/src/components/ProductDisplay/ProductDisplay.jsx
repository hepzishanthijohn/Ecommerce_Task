import React, { useContext } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/Frontend_Assets/star_icon.png';
import star_dull_icon from '../Assets/Frontend_Assets/star_dull_icon.png';
import { ShopContext } from '../../context/ShopContext';
import Navbar from '../Navbar/Navbar';

const ProductDisplay = (props) => {
    const { product } = props;
    const { addToCart } = useContext(ShopContext);

    return (
        <>
            <div className='productdisplay'>
                <div className="productdisplay-left">
                    <div className="productdisplay-img-list">
                        <img src={product.image_url} alt="" />
                        <img src={product.image_url} alt="" />
                        <img src={product.image_url} alt="" />
                        <img src={product.image_url} alt="" />
                    </div>
                    <div className="product-img">
                        <img className='productdisplay-main-img' src={product.image_url} alt="" />
                    </div>
                </div>
                <div className="productdisplay-right">
                    <h3>{product.name}</h3>
                    <div className="productdisplay-right-stars">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_dull_icon} alt="" />
                        <p>(122)</p>
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ${product.old_price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description">
                        {product.title}
                    </div>
                    {(product.category === 'women' || product.category === 'men' || product.category === 'kid' || product.category === 'shop') && (
                        <div className="productdisplay-right-size">
                            <h3>Select Size</h3>
                            <div className="productdisplay-right-sizes">
                                <div className="size-option">S</div>
                                <div className="size-option">M</div>
                                <div className="size-option">L</div>
                                <div className="size-option">XL</div>
                                <div className="size-option">XXL</div>
                            </div>
                        </div>
                    )}
                    <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
                    <p className="productdisplay-right-category"><span>Category:</span>{product.category}</p>
                    <p className="productdisplay-right-category"><span>Tags:</span>Modern, Latest</p>
                </div>
            </div>
        </>
    );
};

export default ProductDisplay;
