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
    { id: 12, name: "Frappé", type: "Zimna kawa", description: "Mrożona kawa z lodem i pianką", newPosition: true }
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
    : coffeeData.filter(coffee => {
        if (activeFilter === 'czarna') return coffee.type === 'Czarna kawa'
        if (activeFilter === 'mleczna') return coffee.type === 'Mleczna kawa'  
        if (activeFilter === 'czekoladowa') return coffee.type === 'Czekoladowa kawa'
        if (activeFilter === 'deserowa') return coffee.type === 'Deserowa kawa'
        if (activeFilter === 'zimna') return coffee.type === 'Zimna kawa'
        return true
    })

  return (
    <>
      <h1 className='Menu'>Menu Kawiarni</h1>
      <FilterMenu 
        activeFilter={activeFilter} 
        onFilterChange={handleFilterChange} 
      />
      <CoffeeList coffees={displayedCoffees} />
    </>
  )
}

export default App
