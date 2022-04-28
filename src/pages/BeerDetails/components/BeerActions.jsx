import { useNavigate } from 'react-router-dom'

const BeerActions = ({ beer, user }) => {
  const navigate = useNavigate()
  return (
    beer.profile_id === user.id &&
    <div className="actions">
      <button className="btn warn" onClick={() => navigate(`/beers/${beer.id}/edit`, { state: beer})}>Edit</button>
      <button className="btn danger" onClick={() => navigate(`/beers/${beer.id}/confirmation`, { state: beer })}>Delete</button>
    </div>
  )
}

export default BeerActions