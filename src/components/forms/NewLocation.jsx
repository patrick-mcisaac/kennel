import { useContext, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { useNavigate } from "react-router-dom"

export const NewLocation = () => {
  const { addLocation } = useContext(LocationContext)
  const [location, setLocation] = useState({
    name: "",
    address: ""
  })

  const navigate = useNavigate()

  const handleChange = (e) => {
    const locationCopy = { ...location }
    locationCopy[e.target.name] = e.target.value
    setLocation(locationCopy)
  }

  const handleClick = (e) => {
    e.preventDefault()
    if (location.name === "" || location.address === "") {
      window.alert("Fill out all fields")
    } else {
      addLocation(location).then(() => navigate("/locations"))
    }
  }

  return (
    <form
      className="m-auto mt-[6em] flex w-[30rem] flex-col items-center justify-start rounded-2xl border-1 p-[2rem_4rem] shadow-md shadow-black"
      action=""
    >
      <h1 className="mb-10 text-4xl font-semibold tracking-wider">
        New Location
      </h1>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label htmlFor="name" className="text-xl">
          Location Name
        </label>
        <input
          onChange={handleChange}
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={location.name}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="address">
          Address
        </label>
        <input
          onChange={handleChange}
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          value={location.address}
        />
      </fieldset>
      <button onClick={handleClick} className="btn transition hover:scale-110">
        Save Location
      </button>
    </form>
  )
}
