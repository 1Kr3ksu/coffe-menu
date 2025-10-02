
function CoffeeCard({ name, type, description, newPosition }) {
    return (
        <>
            <h1>{name}</h1>
            <h4>{type}</h4>
            <p>{description}</p>
            <p>{newPosition}</p> {true / false}
        </>
    )
}
export default CoffeeCard