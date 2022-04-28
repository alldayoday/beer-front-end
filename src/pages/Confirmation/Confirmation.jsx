import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

// Image Assets
import NerdCat from '../../assets/nerd-cat.svg'

const Confirmation = (props) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()
  const resource = props.deleteBeer ? 'beers' : 'shops'

  const handleDelete = () => {
    props.deleteBeer && props.deleteBeer(id)
    props.deleteShop && props.deleteShop(id)
    navigate(`/${resource}`)
  }

  return (
    <>
      <div className="page-header">
        <h1>Delete Confirmation</h1>
        <img src={NerdCat} alt="A cat using a computer" />
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/${resource}/${id}`}>Cancel</Link>
        <button onClick={handleDelete} type="button" className="btn danger">Yes - Delete!</button>
      </section>
    </>
  )
}

export default Confirmation