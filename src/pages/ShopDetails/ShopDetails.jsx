import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import './ToyDetails.css'

// Services
// Services
import { getOne } from '../../services/shops'

// Components
import ShopActions from './components/ShopActions'
import ShopCard from '../../components/ShopCard/ShopCard'

const ShopDetails = ({ user }) => {
  const { id } = useParams()
  const [shop, setShop] = useState(null)

  useEffect(() => {
    const fetchOne = async () => {
      const shopData = await getOne(id)
      setShop(shopData)
    }
    fetchOne()
  }, [id])

  return (
    shop &&
    <>
      <section className="toy-details-container">
        <div className="toy-img">
          <ShopCard shop={shop} />
        </div>
        <div className="toy-details">
          <h1>{shop.name}</h1>
          <p>{shop.location}</p>
          <ShopActions shop={shop} user={user} />
        </div>
      </section>
    </>
  )
}

export default ShopDetails