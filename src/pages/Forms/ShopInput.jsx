const ShopInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="description">Location</label>
      <input
        value={form.location ? form.location : ''} onChange={handleChange} id="description"
        required name="location" type="text" placeholder="Location" autoComplete="off"
      />
      <label htmlFor="vibe">Vibe</label>
      <input
        value={form.vibe ? form.vibe : '#ff0000'} onChange={handleChange} id="color"
        required name="vibe" type="color" placeholder="Vibe" autoComplete="off"
      />
    </>
  )
}

export default ShopInput