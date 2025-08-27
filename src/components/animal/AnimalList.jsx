import { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalList = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <section>
      <h1 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        Animals
      </h1>
      <div className="mt-[7rem] flex flex-col items-center gap-10">
        {animals.map((animal) => {
          return (
            <div className="card" key={animal.id}>
              <p>Name: {animal.name}</p>
              <p>Breed: {animal.breed}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
