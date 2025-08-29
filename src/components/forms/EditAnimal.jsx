import { useContext, useEffect, useState } from "react"
import { AnimalContext } from "../animal/AnimalProvider"
import { useNavigate, useParams } from "react-router-dom"
import { CustomersContext } from "../customers/CustomerProvider"
import { LocationContext } from "../location/LocationProvider"

export const EditAnimal = () => {
  const { getAnimalById, putAnimal } = useContext(AnimalContext)
  const { getCustomers, customers } = useContext(CustomersContext)
  const { getLocations, locations } = useContext(LocationContext)

  const navigate = useNavigate()

  const [animal, setAnimal] = useState({
    id: 0,
    name: "",
    breed: "",
    customerId: 0,
    locationId: 0
  })

  const { animalId } = useParams()

  useEffect(() => {
    getAnimalById(parseInt(animalId)).then(setAnimal)
    getCustomers()
    getLocations()
  }, [])

  const handleChange = (e) => {
    const copyAnimal = { ...animal }
    copyAnimal[e.target.name] = e.target.value
    setAnimal(copyAnimal)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const copyAnimal = { ...animal }
    copyAnimal.customerId = parseInt(animal.customerId)
    copyAnimal.locationId = parseInt(animal.locationId)

    if (
      animal.name === "" ||
      animal.breed === "" ||
      animal.id === 0 ||
      animal.customerId === 0 ||
      animal.locationId === 0
    ) {
      window.alert("Please fill out whole form")
    } else {
      putAnimal(copyAnimal.id, copyAnimal).then(() => navigate("/animals"))
    }
  }

  return (
    <form
      className="m-auto mt-[.6rem] flex w-[30rem] flex-col items-center justify-start rounded-2xl border-1 p-[1rem_4rem] shadow-md shadow-black"
      action=""
    >
      <h1 className="mb-10 text-4xl font-semibold tracking-wider">
        Edit Animal
      </h1>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="name">
          Name
        </label>
        <input
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          name="name"
          value={animal?.name}
          autoFocus
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="breed">
          Breed
        </label>
        <input
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          id="breed"
          name="breed"
          value={animal?.breed}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="locations">
          Locations
        </label>
        <select
          onChange={handleChange}
          className="w-[80%] cursor-pointer self-center rounded-2xl border-1 pl-2"
          name="locationId"
          id="locations"
        >
          <option value="0">Choose a location</option>
          {locations.map((location) => (
            <option
              key={location.id}
              value={location.id}
              selected={location.id === animal.locationId ? true : false}
            >
              {location.name}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="customers">
          Customers
        </label>
        <select
          onChange={handleChange}
          className="w-[80%] cursor-pointer self-center rounded-2xl border-1 pl-2"
          name="customerId"
          id="customers"
        >
          <option value="0">Choose a customer</option>
          {customers.map((c) => (
            <option
              key={c.id}
              value={c.id}
              selected={c.id === animal.customerId ? true : false}
            >
              {c.name}
            </option>
          ))}
        </select>
      </fieldset>
      <button className="btn" type="submit" onClick={handleSubmit}>
        Save
      </button>
    </form>
  )
}
