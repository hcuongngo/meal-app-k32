import React, { useContext, useEffect, useState } from 'react'
import fakeStore from '../apis'
import { ALL_MEALS_URL } from '../constants'

const AppContext = React.createContext()

// get data from store to component
export const useGlobalContext = () => {
  return useContext(AppContext)
}

function AppProvider({ children }) {
  const [meals, setMeals] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const fetchMeals = async (url) => {
    setIsLoading(true)
    try {
      const response = await fakeStore().get(url)
      console.log("response", response)
      if (response) {
        setMeals(response.data.meals)
      }
    } catch (error) {
      console.log("error", error)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMeals(ALL_MEALS_URL)
  }, [])

  return (
    <AppContext.Provider
      value={{
        isLoading,
        meals
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export default AppProvider