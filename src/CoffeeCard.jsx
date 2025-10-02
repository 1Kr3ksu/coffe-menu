import './CoffeeCard.css'
function CoffeeCard({ name, type, description, newPosition }) {
    return (
        <>
        <div className="coffee-list">
        <div className="coffee-cards">
            <h1>{name}</h1>
            <h4>{type}</h4>
            <p>{description}</p>
            <p>{newPosition}</p> {true / false}
              </div>
              </div>
        </>
      
    )
}
export default CoffeeCard