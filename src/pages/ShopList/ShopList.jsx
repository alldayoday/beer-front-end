import './ToyList.css'

// Image Assets
import Fish from '../../assets/fish.svg'
import Mouse from '../../assets//mouse.svg'
import StringToy from '../../assets/string.svg'
import PostToy from '../../assets/post.svg'

// Components
import ShopCard from '../../components/ShopCard/ShopCard'

const ShopList = (props) => {
  return (
    <>
      <section className="page-header">
        <h1>Shop List</h1>
        <img src={Mouse} alt="a mouse toy" />
        <img src={Fish} alt="a fish toy" />
        <img src={StringToy} alt="a string toy" />
        <img src={PostToy} alt="a post toy" />
      </section>
      <section className="toy-card-container">
        {props.shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} isCard={true} />
        ))}
      </section>
    </>
  )
}

export default ShopList