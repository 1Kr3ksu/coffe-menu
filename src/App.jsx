import { useState } from 'react'

import CoffeeList from './CoffeeList.jsx'
import FilterMenu from './FilterMenu.jsx'
import './App.css'
  const coffeeData = [
    { id: 1, name: "Espresso", type: "Czarna kawa", description: "Klasyczna, mocna kawa podawana w małej filiżance", newPosition: false },
    { id: 2, name: "Cappuccino", type: "Mleczna kawa", description: "Espresso z parowanym mlekiem i pianką", newPosition: false },
    { id: 3, name: "Latte", type: "Mleczna kawa", description: "Delikatna kawa z dużą ilością mleka", newPosition: false },
    { id: 4, name: "Americano", type: "Czarna kawa", description: "Espresso rozcieńczone gorącą wodą", newPosition: false },
    { id: 5, name: "Macchiato", type: "Mleczna kawa", description: "Espresso z odrobiną parowanego mleka", newPosition: true },
    { id: 6, name: "Mocha", type: "Czekoladowa kawa", description: "Kawa z czekoladą i bitą śmietaną", newPosition: true },
    { id: 7, name: "Flat White", type: "Mleczna kawa", description: "Silne espresso z gładkim, mikropianowanym mlekiem", newPosition: true },
    { id: 8, name: "Cortado", type: "Mleczna kawa", description: "Hiszpańska kawa z równymi proporcjami espresso i mleka", newPosition: true },
    { id: 9, name: "Affogato", type: "Deserowa kawa", description: "Lody waniliowe polane gorącym espresso", newPosition: true },
    { id: 10, name: "Ristretto", type: "Czarna kawa", description: "Intensywne espresso z mniejszą ilością wody", newPosition: false },
    { id: 11, name: "Lungo", type: "Czarna kawa", description: "Wydłużone espresso z większą ilością wody", newPosition: false },
    { id: 12, name: "Frappé", type: "Zimna kawa", description: "Mrożona kawa z lodem i pianką", newPosition: true },
    { id: 13, name: "Irish Coffee", type: "Inne", description: "Kawa z irlandzką whiskey, cukrem i bitą śmietaną", newPosition: true },
    { id: 14, name: "Kawa po turecku", type: "Inne", description: "Tradycyjna kawa parzona w tygielku", newPosition: false },
    { id: 15, name: "Kawa po wiedeńsku", type: "Inne", description: "Kawa z bitą śmietaną i posypką czekoladową", newPosition: false },
    
  ];
function App() {
//implementacja stanu
const [activeFilter, setActiveFilter] = useState('wszystkie');

// Funkcja do zmiany filtru
const handleFilterChange = (filterId) => {
  setActiveFilter(filterId)
}

const displayedCoffees = activeFilter === 'wszystkie'
    ? coffeeData 
    : activeFilter === 'inne'
      ? coffeeData.filter(coffee => coffee.type === 'Inne')
      : coffeeData.filter(coffee => {
          if (activeFilter === 'czarna') return coffee.type === 'Czarna kawa'
          if (activeFilter === 'mleczna') return coffee.type === 'Mleczna kawa'  
          if (activeFilter === 'czekoladowa') return coffee.type === 'Czekoladowa kawa'
          if (activeFilter === 'deserowa') return coffee.type === 'Deserowa kawa'
          if (activeFilter === 'zimna') return coffee.type === 'Zimna kawa'
          if (activeFilter === 'Inne') return coffee.type === 'Inne'
          return true
      })

 return (
    <>
      <h1 className='menu'>Menu Kawiarni</h1>
      <FilterMenu 
        activeFilter={activeFilter} 
        onFilterChange={handleFilterChange} 
      />
      {displayedCoffees.length === 0 ? (
        <div className="no-coffees">
        <p>Przepraszamy, obecnie nie mamy kaw tego typu.</p>
        </div>
      ) : (
        <CoffeeList coffees={displayedCoffees} />
      )}
    </>
  )
}

export default App
