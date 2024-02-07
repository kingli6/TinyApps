import shirtOutline from '../../../assets/images/Skärmbild 2024-02-07 135023.png'
import productStyle from './product.module.css'
import { useContext } from 'react';
import CartContext from './services/CartContext';


const Card = ({name, price}) => {
  const {addToCart} = useContext(CartContext)
    const handleBuyClick = () => {
        addToCart(name,price)
      };

  return (
    <div className={productStyle.card}>
      <img src={shirtOutline} alt='example shirt'/>  
      <div className={productStyle.cardContent}>
        <div className='itemLeft'>
            <h3>{name}</h3>
            <h4>${price}</h4>
        </div>
        <button className={productStyle.buyButton} onClick={handleBuyClick}>Buy</button>
      </div>
      
    </div>
  )
}

export default Card
