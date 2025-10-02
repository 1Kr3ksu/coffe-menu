function FilterMenu({ activeFilter, onFilterChange }){
  const filters = [
    { id: 'wszystkie', label: 'Wszystkie' },
    { id: 'espresso', label: 'Espresso' },
    { id: 'przelewy', label: 'Przelewy' },
    { id: 'mrozone', label: 'Mrożone' }
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
      </div>
    </div>
  )
}
export default FilterMenu