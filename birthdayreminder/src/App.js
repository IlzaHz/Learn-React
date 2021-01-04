
import React, { useState } from 'react'

import data, { array } from './data'
import List from './List'

function App() {

  //state variable
  const [people, setPeople] = useState(data)

  function clearAllRecords() {
    setPeople([])
  }

  return (
    <div className="App">
      <main>
        <section className="container">
          <h3>{data.length} birthdays today</h3>
          <List people={people} />
          <button onClick={clearAllRecords}>Clear</button>
        </section>
      </main>
    </div>
  )
}

export default App
