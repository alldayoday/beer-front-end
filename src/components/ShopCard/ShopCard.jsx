import { Link } from 'react-router-dom'
import { hexToRGBA } from './Utils'

const ShopCard = ({ shop, isCard }) => {
  const cardStyle = {
    borderColor: `${shop.vibe}`,
    backgroundColor: shop.vibe && hexToRGBA(shop.vibe)
  }

  return (
    <Link to={`/shops/${shop.id}`} className="toy-card" style={cardStyle}>
      {isCard && <><h2>{shop.name}</h2><p>{shop.location}</p></>}
    </Link>
  )
}

export default ShopCard