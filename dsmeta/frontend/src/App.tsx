//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import './App.css'

import Header from "./Components/Header";
import SalesCard from "./Components/SalesCard";

function App() {
  return (
    <>
      <Header></Header>
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>

  )
}

export default App;
