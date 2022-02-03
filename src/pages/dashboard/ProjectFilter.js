import { useState } from "react";

const filterList = [
  'all',
  'mine',
  'development',
  'design',
  'marketing',
  'sales'
]

export default function ProjectFilter() {

  const [currentFilter, setCurrentFilter] = useState('all')

  const handleClick = (e, f) => {
    e.preventDefault()
    console.log(f)
    setCurrentFilter(f)
  }

  return (
    <div className='project-filter'>
      <nav>
        {filterList.map((f) => (
          <button
            key={f}
            className={currentFilter === f ? 'active' : ''}
            onCLick={() => handleClick(f)}
          >
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
}
