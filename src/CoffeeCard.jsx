import './CoffeeCard.css'

function CoffeeCard({ name, type, description, newPosition }) {
    return (
        <div className="coffee-card">
            <h3>{name} {newPosition && <span className="new-position">NOWOŚĆ</span>}</h3>
            <h4 className="coffee-type">{type}</h4>
            <p className="coffee-description">{description}</p>
        </div>
    )
}

export default CoffeeCard