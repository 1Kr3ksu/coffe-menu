import CoffeeCard from './CoffeeCard.jsx'

function CoffeeList({ kawy }) {  
  return (
    <div className="coffee-list">
      {kawy.map((kawa) => (  
        <CoffeeCard 
          key={kawa.id} 
          name={kawa.name} 
          type={kawa.type} 
          description={kawa.description} 
          newPosition={kawa.newPosition} 
        />
      ))}
    </div>
  )
}

export default CoffeeList