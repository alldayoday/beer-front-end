import '../../styles/Form.css'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

// Services


// Components
import ShopInput from './ShopInput'

// Image Assets
import NerdCat from '../../assets/nerd-cat.svg'

const ShopForm = (props) => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [form, setForm] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault()
    id ? props.updateShop(form) : props.addShop(form)
    navigate(`/shops`)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  useEffect(() => {}, [id])

  return (
    <>
      <div className="page-header">
        {id
          ? <h1>Edit Shop</h1>
          : <><h1>Add Shop</h1><img src={NerdCat} alt="A cat using a computer" /></>
        }
      </div>

      <section className="form-container">
        <form onSubmit={handleSubmit}>
          <ShopInput form={form} handleChange={handleChange} />
          <button type="submit" className="btn submit">Submit!</button>
        </form>
      </section>
    </>
  )
}

export default ShopForm