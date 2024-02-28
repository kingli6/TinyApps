import {useContext} from 'react';
import CartContext from './services/CartContext';
import Header from './Header';
const CheckOutComponent = () => {
    const {cartItems} = useContext(CartContext);
  return (
    <div>
      <Header/>
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
