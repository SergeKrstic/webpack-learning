import React from 'react'
import Recipes from './Recipes';
import '../styles/index.scss';
import sword from '../images/sword.jpeg'
import bannerSvg from '../images/swc-banner.svg'

const App = () => {
  return (
    <>
      <section className="hero"></section>
      <main>
        <section>
          <h1>Oh Hai, React</h1>
        </section>
        <img src={sword} alt="sword" width="250px" />
        <img src={bannerSvg} alt="bannerSvg" width="250px" />
        <Recipes/>
      </main>
    </>
  )
}

export default App