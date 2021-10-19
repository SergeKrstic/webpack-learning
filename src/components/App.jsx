import React from 'react'
import Recipes from './Recipes';
import '../styles/index.scss';

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
      </main>
      <Recipes/>
    </>
  )
}

export default App