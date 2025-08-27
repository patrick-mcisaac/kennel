/* eslint-disable no-unreachable */
import React, { useState, createContext } from "react"

export const AnimalContext = createContext()

export const AnimalProvider = (props) => {
  const [animals, setAnimals] = useState([])

  // The context is imported and used by individual components that need data
  const getAnimals = () => {
    return fetch(
      "http://localhost:8088/animals?_expand=customer&_expand=location&_sort=locationId"
    )
      .then((res) => res.json())
      .then(setAnimals)
  }

  // This component establishes what data can be used.
  const addAnimal = (animalObj) => {
    return fetch("http://localhost:8088/animals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(animalObj)
    }).then(getAnimals)
  }
  return (
    <AnimalContext.Provider
      value={{ animals, setAnimals, getAnimals, addAnimal }}
    >
      {props.children}
    </AnimalContext.Provider>
  )
}
