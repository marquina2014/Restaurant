import { useState } from 'react'
import './App.css'

function App() {
  const [user] = useState('Luis y Oscar')
  const trendingRecipes = [
    {
      title: 'Salmon Tartare',
      time: '30 min',
      difficulty: 'Medium',
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c'
    }
  ]

  return (
    <div className="app">
      <header className="app-header">
        <h2>Aplicacion De Recetas con IA</h2>
        <p className="subtitle">¿Que cocinaras hoy?</p>
      </header>

      <section className="recipe-section">
        <h3>Trending Recipes</h3>
        <div className="recipe-list">
          {trendingRecipes.map((recipe, index) => (
            <div className="recipe-card" key={index}>
              <img src={recipe.image} alt={recipe.title} />
              <div className="card-info">
                <h4>{recipe.title}</h4>
                <p>{recipe.time} • {recipe.difficulty}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default App
