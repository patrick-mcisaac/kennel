import { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { useNavigate } from "react-router-dom"

export const AnimalList = () => {
  const navigate = useNavigate()
  const { animals, getAnimals } = useContext(AnimalContext)
  useEffect(() => {
    getAnimals()
  }, [])

  return (
    <section className="flex flex-col items-center justify-start">
      <h1 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        Animals
      </h1>
      <button
        onClick={() => navigate("/animals/add")}
        className="btn mt-[4rem]"
      >
        Add Animal
      </button>
      <div className="mt-[5rem] flex flex-col items-center gap-10">
        {animals.map((animal) => {
          return (
            <div className="card" key={animal.id}>
              <p>Name: {animal.name}</p>
              <p>Breed: {animal.breed}</p>
              <p>Owner: {animal.customer.name}</p>
              <p>Location: {animal.location.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
