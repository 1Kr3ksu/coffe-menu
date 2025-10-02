import CoffeeCard from './CoffeeCard.jsx'

function CoffeeList({ coffees }) {  
  return (
    <div className="coffee-list">
      {coffees.map((coffee) => (  
        <CoffeeCard 
          key={coffee.id} 
          name={coffee.name} 
          type={coffee.type} 
          description={coffee.description} 
          newPosition={coffee.newPosition} 
        />
      ))}
    </div>
  )
}

export default CoffeeList