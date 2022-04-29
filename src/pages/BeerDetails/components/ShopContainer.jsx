import { Link } from 'react-router-dom'

const ShopContainer = ({ shop, addToCollection }) => {
  return (
    <div key={shop.id} className="toy-container">
      <div className="color-block" style={{ backgroundColor: shop.vibe }}></div>
      <Link to={`/shops/${shop.id}`}>
        <p>{shop.name}</p>
      </Link>
      {addToCollection &&
        <form id={shop.id} onSubmit={addToCollection}>
          <button type="submit" className="btn submit">Add Shop</button>
        </form>
      }
    </div>
  )
}

export default ShopContainer