import { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { LocationContext } from "../location/LocationProvider"
import { CustomersContext } from "../customers/CustomerProvider"
import { useNavigate } from "react-router-dom"

export const AddAnimal = () => {
  const { addAnimal } = useContext(AnimalContext)
  const { locations, getLocations } = useContext(LocationContext)
  const { customers, getCustomers } = useContext(CustomersContext)

  const [animal, setAnimal] = useState({
    name: "",
    breed: "",
    locationId: 0,
    customerId: 0
  })

  const navigate = useNavigate()

  useEffect(() => {
    getCustomers().then(getLocations)
  }, [])

  const handleControlledInputChange = (e) => {
    const newAnimal = { ...animal }
    newAnimal[e.target.id] = e.target.value
    setAnimal(newAnimal)
  }

  const handleClick = (e) => {
    e.preventDefault()
    const locationId = parseInt(animal.locationId)
    const customerId = parseInt(animal.customerId)

    if (locationId === 0 || customerId === 0) {
      window.alert("Please select a Location and a Customer")
    } else {
      const newAnimal = {
        name: animal.name,
        breed: animal.breed,
        locationId: animal.locationId,
        customerId: animal.customerId
      }

      addAnimal(newAnimal).then(() => navigate("/animals"))
    }
  }

  return (
    <form
      className="m-auto mt-[1.8rem] flex w-[30rem] flex-col items-center justify-start rounded-2xl border-1 p-[1rem_4rem] shadow-md shadow-black"
      action=""
    >
      <h1 className="mb-10 text-4xl font-semibold tracking-wider">
        Add Animal
      </h1>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="name">
          Animal Name:
        </label>
        <input
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          id="name"
          required
          autoFocus
          placeholder="Animal Name"
          value={animal.name}
          onChange={handleControlledInputChange}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="breed">
          Animal Breed:
        </label>
        <input
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          id="breed"
          required
          autoFocus
          placeholder="Animal Breed"
          value={animal.breed}
          onChange={handleControlledInputChange}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="location">
          Assign to location:
        </label>
        <select
          className="w-[80%] cursor-pointer self-center rounded-2xl border-1 pl-2"
          name="locationId"
          id="locationId"
          value={animal.locationId}
          onChange={handleControlledInputChange}
        >
          <option id="0" value="0">
            Choose Location
          </option>
          {locations.map((location) => {
            return (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            )
          })}
        </select>
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="customerId">
          Customer:
        </label>
        <select
          className="w-[80%] cursor-pointer self-center rounded-2xl border-1 pl-2"
          name="customer"
          id="customerId"
          value={animal.customerId}
          onChange={handleControlledInputChange}
        >
          <option value="0">Choose a customer</option>
          {customers.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
      </fieldset>
      <button onClick={handleClick} className="btn">
        Save Animal
      </button>
    </form>
  )
}
