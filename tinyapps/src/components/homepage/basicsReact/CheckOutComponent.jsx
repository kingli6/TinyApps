import {useContext} from 'react';
import CartContext from './services/CartContext';

const CheckOutComponent = () => {
    const {cartItems} = useContext(CartContext);
  return (
    <div>
      <h2>Checkout</h2>
      <div >
        {cartItems.map((item) => (
            <div  key={item.id}>
                <h2>{item.name}</h2>
                <h3>{item.price}</h3>
            </div>
        ))}
      </div>
    </div>
  )
}

export default CheckOutComponent
