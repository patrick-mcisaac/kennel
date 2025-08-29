import { useContext, useEffect, useState } from "react"
import { LocationContext } from "../location/LocationProvider"
import { useNavigate, useParams } from "react-router-dom"

export const EditLocation = () => {
  const { getLocationById, putLocation } = useContext(LocationContext)
  const [location, setLocation] = useState({
    id: 0,
    name: "",
    address: ""
  })

  const { locationId } = useParams()

  const navigate = useNavigate()

  useEffect(() => {
    getLocationById(locationId).then(setLocation)
  }, [])

  const handleChange = (e) => {
    const copy = { ...location }
    copy[e.target.name] = e.target.value
    setLocation(copy)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.name === "" || location.address === "" || location.id === 0) {
      window.alert("Please fill out the form")
    } else {
      putLocation(location.id, location).then(() => navigate("/locations"))
    }
  }

  return (
    <form
      className="m-auto mt-[6rem] flex w-[30rem] flex-col items-center justify-start rounded-2xl border-1 p-[1rem_4rem] shadow-md shadow-black"
      action=""
    >
      <h1 className="mb-10 text-4xl font-semibold tracking-wider">
        Edit Location
      </h1>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="name">
          Location Name
        </label>
        <input
          onChange={handleChange}
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          name="name"
          id="name"
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
          value={location.address}
        />
      </fieldset>
      <button onClick={handleSubmit} className="btn">
        Save
      </button>
    </form>
  )
}
