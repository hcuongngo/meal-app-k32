import React from 'react'
import { useGlobalContext } from '../context'

function Meals() {
  const { isLoading, meals } = useGlobalContext()
  console.log("isLoading", isLoading)
  console.log("meals", meals)

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (meals?.length < 1) {
    return <div>No meals</div>
  }

  return (
    <div>
      {
        meals.map(meal => {
          const { idMeal: id, strMeal: name, strMealThumb: image } = meal
        })
      }
    </div>
  )
}

export default Meals