import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { AnimalContext } from "./AnimalProvider"

export const AnimalDetails = () => {
  const { animals, getAnimals } = useContext(AnimalContext)
  const [animal, setAnimal] = useState({})
  const { animalId } = useParams()

  useEffect(() => {
    getAnimals()
  }, [])

  useEffect(() => {
    const thisAnimal = animals.find((a) => a.id === parseInt(animalId))
    setAnimal(thisAnimal)
  }, [animalId, animals])
  return (
    <section className="card-long m-auto mt-[10rem]">
      <h1 className="text-2xl font-semibold tracking-wider">{animal?.name}</h1>
      <p className="text-2xl font-semibold tracking-wider">{animal?.breed}</p>
      <p className="flex flex-col gap-1 text-xl tracking-wider">
        <span className="font-semibold">Location:</span>{" "}
        {animal?.location?.name}
      </p>
      <p className="flex flex-col gap-1 text-xl tracking-wider">
        <span className="font-semibold">Customer:</span>{" "}
        {animal?.customer?.name}
      </p>
    </section>
  )
}
