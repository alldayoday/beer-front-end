// Image Assets
import StringToy from '../../../assets/string.svg'
import MouseToy from '../../../assets/mouse.svg'
import FishToy from '../../../assets/fish.svg'

// Components
import ShopContainer from './ShopContainer'

const ShopCollection = ({ beer, shops, user, addToCollection }) => {
  return (
    <section className="toys">
      <div className="subsection-title">
        <h2>Shops</h2>
        <img src={StringToy} alt="A ball of string" />
        <img src={MouseToy} alt="A mouse" />
        <img src={FishToy} alt="A fishy toy" />
      </div>
      <h3>Find {beer.name}</h3>
      <div className="subsection-content">
        {beer.shops.length
          ? beer.shops.map((shop) => <ShopContainer key={shop.id} shop={shop} />)
          : <p className="no-toys">We haven't located this beer 😞</p>
        }
      </div>
      {user.id === beer.profile_id &&
        <>
          <h3>Found At</h3>
          <div className="subsection-content">
            {shops?.length
              ? shops.map((shop) => <ShopContainer key={shop.id} shop={shop} beer={beer} user={user} addToCollection={addToCollection} />)
              : <p className="all-toys"> {beer.name} already has all the available shops 🥳</p>
            }
          </div>
        </>
      }
    </section>
  )
}

export default ShopCollection


