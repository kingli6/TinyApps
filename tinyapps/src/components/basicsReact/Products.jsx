import productStyle from './product.module.css'
import Card from './Card.jsx'
const Products = () => {
    const products = [
        { name: "Product 1", price: "$30", id:1 },
        { name: "Product 2", price: "$30", id:2 },
        { name: "Product 3", price: "$45", id:3 },
        { name: "Product 4", price: "$50", id:4 },
        { name: "Product 5", price: "$30", id:5 },
        { name: "Product 6", price: "$30", id:6 },
        { name: "Product 7", price: "$30", id:7 },
        { name: "Product 8", price: "$30", id:8 },
    ]
  return (
    <div className={productStyle.productlist}>
      {
        products.map((product) => (
            <Card name={product.name} price={product.price}  key={product.id} />
        ))
      }
    </div>
  )
}

export default Products
