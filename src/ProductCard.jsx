function ProductCard(props) {
  const {item} = props
  return (
    <div className="product-item">
      <img src={item.thumbnail} alt={item.title} />
      <h4>{item.title}</h4>
      <p>Category: {item.category}</p>
      <p className='description'>Description : {item.description}</p>
      <p>Price : {item.price}</p>
    </div>
  )
}

export default ProductCard