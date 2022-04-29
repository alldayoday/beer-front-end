import { useNavigate } from 'react-router-dom'

const ShopActions = ({ shop, user }) => {
  const navigate = useNavigate()
  return (
    shop.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/shops/${shop.id}/edit`, { state: shop })}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/shops/${shop.id}/confirmation`, { state: shop })}>Delete</button>
    </div>
  )
}

export default ShopActions