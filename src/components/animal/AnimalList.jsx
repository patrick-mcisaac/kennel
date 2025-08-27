import { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  useEffect(() => {
    console.log("AnimalList: useEffect-getAnimals")
    getAnimals()
  }, [])

  return (
    <section>
      {animals.map((animal) => {
        return (
          <div key={animal.id}>
            <p>Name: {animal.name}</p>
            <p>Breed: {animal.breed}</p>
          </div>
        )
      })}
    </section>
  )
}
