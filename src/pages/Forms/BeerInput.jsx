const BeerInput = ({ form, handleChange }) => {
  return (
    <>
      <label htmlFor="name">Name</label>
      <input
        value={form.name ? form.name : ''} onChange={handleChange} id="name"
        required name="name" type="text" placeholder="Name" autoComplete="off"
      />
      <label htmlFor="breed">Style</label>
      <input
        value={form.style ? form.style : ''} onChange={handleChange} id="breed"
        required name="style" type="text" placeholder="Style" autoComplete="off"
      />
        <label htmlFor="breed">Brewery</label>
      <input
        value={form.brewery ? form.brewery : ''} onChange={handleChange} id="breed"
        required name="brewery" type="text" placeholder="Brewery" autoComplete="off"
      />
            <label htmlFor="breed">Location</label>
      <input
        value={form.location ? form.location : ''} onChange={handleChange} id="breed"
        required name="location" type="text" placeholder="Location" autoComplete="off"
      />
      <label htmlFor="description">Description</label>
      <input
        value={form.description ? form.description : ''} onChange={handleChange} id="description"
        required name="description" type="text" placeholder="Description" autoComplete="off"
      />
      <label htmlFor="age">ABV</label>
      <input
        value={form.abv ? form.abv : ''} onChange={handleChange} id="age"
        name="abv" type="text" placeholder="ABV" autoComplete="off"
      />
    </>
  )
}

export default BeerInput