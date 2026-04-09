import { useEffect, useState } from "react"
import ProductContainer from "./ProductContainer"

function App() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then( data => {
        console.log(data)
        setProducts(data.products)
      });
  }, [])

  return (
    <>
      <h1>Products list</h1>
      <hr />
      <ProductContainer products={products}/>
      <hr/>
      {/* <pre>{JSON.stringify(products[0], null, 2)}</pre> */}
    </>
  )
}

export default App
