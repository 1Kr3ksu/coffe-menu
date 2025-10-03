import './FilterMenu.css'

function FilterMenu({ activeFilter, onFilterChange }){
  const filters = [
    { id: 'wszystkie', label: 'Wszystkie' },
    { id: 'czarna', label: 'Czarne kawy' },
    { id: 'mleczna', label: 'Mleczne kawy' },
    { id: 'czekoladowa', label: 'Czekoladowe' },
    { id: 'deserowa', label: 'Deserowe' },
    { id: 'zimna', label: 'Mrożone' }
  ]

  return (
    <div className="filter-menu">
      <h3>Filtruj kawy:</h3>
      <div className="filter-buttons">
        {filters.map(filter => (
          <button
            key={filter.id}
            className={`filter-btn ${activeFilter === filter.id ? 'active' : ''}`}
            onClick={() => onFilterChange(filter.id)}
          >
            {filter.label}
          </button>
          
        ))}
   <button
  className={`filter-btn ${activeFilter === 'inne' ? 'active' : ''}`}
  onClick={() => onFilterChange('inne')}
>
  Inne
</button>
      </div>
    </div>
  )
}

export default FilterMenu