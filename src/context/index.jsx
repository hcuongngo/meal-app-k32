import React, { useContext, useState } from 'react'

const AppContext = React.createContext()

// get data from store to component
const useGlobalContext = () => {
  return useContext(AppContext)
}

function AppProvider() {
  const [meals, setMeals] = useState([])
  
  return (
    <div>AppProvider</div>
  )
}

export default AppProvider