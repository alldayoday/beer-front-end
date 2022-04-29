import { useState } from 'react'
import moment from 'moment'

// Services
import { addTasting } from '../../../services/beers'

const initialState = {
  date: moment(new Date()).format('YYYY-MM-DDTHH:mm')
}

const TastingForm = ({ beer, setBeer }) => {
  const [form, setForm] = useState(initialState)

  const addToTastings = async (e) => {
    e.preventDefault()
    const hasBeer = await addTasting(beer.id, form)
    setBeer(hasBeer)
    setForm(initialState)
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  return (
    <>
      <h3>Add a Tasting</h3>
      <form onSubmit={addToTastings}>
        <div>
          <label htmlFor="date">Feeding Date:</label>
          <input required onChange={handleChange} type="datetime-local" name="date" value={form.date ? form.date : ''} />
        </div>
        <input
          value={form.shop ? form.shop : ''} onChange={handleChange}
          required name="shop" type="text" placeholder="Shop" autoComplete="off"
        />
        <input
          value={form.impression ? form.impression : ''} onChange={handleChange} id="breed"
          required name="impression" type="text" placeholder="Impression" autoComplete="off"
        />
        <button type="submit" className="btn submit">Add Tasting</button>
      </form>
    </>
  )
}

export default TastingForm