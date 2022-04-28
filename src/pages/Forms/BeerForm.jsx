import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../../styles/Form.css'

// Services
// Services
import { getOne } from '../../services/beers'

// Components
import BeerInput from './BeerInput'

// Image Assets
import NerdCat from '../../assets/nerd-cat.svg'

const BeerForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateBeer(form) : props.addBeer(form)
    navigate(`/beers`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setForm({
        id: data.beer.id,
        name: data.beer.name,
        style: data.beer.style,
        brewery: data.beer.brewery,
        location: data.beer.location,
        description: data.beer.description,
        abv: data.beer.abv
      })
    }
    id && fetchOne()
    return () => setForm({})
  }, [id])

  return (
    <>
      <div className="page-header">
        {id
          ? <h1>Edit Beer</h1>
          : <><h1>Add Beer</h1><img src={NerdCat} alt="A cat using a computer" /></>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <BeerInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default BeerForm