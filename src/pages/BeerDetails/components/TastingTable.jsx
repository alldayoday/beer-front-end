const TastingTable = ({ beer }) => {
  return (
    <table>
      <thead>
        <tr><th>Date</th><th>Impression</th><th>Shop</th></tr>
      </thead>
      <tbody>
        {beer.tastings.map((tasting) =>
          <tr key={tasting.id}>
            <td>{tasting.date}</td>
            <td>{tasting.impression}</td>
            <td>{tasting.shop}</td>
          </tr>
        ).reverse()}
      </tbody>
    </table>
  )
}

export default TastingTable