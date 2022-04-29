// Image Assets
import CatCone from '../../../assets/cat-cone.svg'
import CatOnigiri from '../../../assets/cat-onigiri.svg'
import CatKabob from '../../../assets/kitty-kabob.svg'

// Components
import TastingForm from './TastingForm'
import TastingTable from './TastingTable'

const Tastings = ({ beer, user, setBeer }) => {
  return (
    <section className="feedings">
      <div className="subsection-title">
        <h2>Tastings</h2>
        <img
          src={CatCone}
          alt="An ice cream cone cat"
        />
        <img
          src={CatOnigiri}
          alt="A cat as onigiri"
        />
        <img
          src={CatKabob}
          alt="A kabob of kittens"
        />
      </div>
      {user.id === beer.profile_id && <TastingForm beer={beer} setBeer={setBeer} />}
      <h3>Past Tastings</h3>
      {beer.tastings.length
        ? <TastingTable beer={beer} />
        : <div className="subsection-content"><p>{beer.name} has never been tasted 😔</p></div>
      }
    </section>
  )
}

export default Tastings