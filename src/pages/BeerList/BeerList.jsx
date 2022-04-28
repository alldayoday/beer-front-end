import './CatList.css'

// Components
import BeerCard from '../../components/BeerCard/BeerCard'

const BeerList = ({ beers, catImages }) => {
  return (
    <>
      <section className="page-header">
        <h1>Beer List</h1>
        <img src={catImages[1]} alt="A cool cat" />
        <img src={catImages[3]} alt="A happy cat" />
        <img src={catImages[5]} alt="A cat in a teacup" />
        <img src={catImages[4]} alt="A cat in a box" />
      </section>
      <section className="card-container">
        {beers.map((beer) => (
          <BeerCard
            beer={beer}
            key={beer.id}
            catImages={catImages}
          />
        ))}
      </section>
    </>
  )
}

export default BeerList