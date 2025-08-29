import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { LocationContext } from "../location/LocationProvider"
import { useNavigate } from "react-router-dom"

export const HireEmployee = () => {
  const { addEmployee } = useContext(EmployeeContext)
  const { locations, getLocations } = useContext(LocationContext)

  const navigate = useNavigate()

  const [employee, setEmployee] = useState({
    name: "",
    locationId: 0
  })

  useEffect(() => {
    getLocations()
  }, [])

  const handleChange = (e) => {
    const employeeCopy = { ...employee }
    employeeCopy[e.target.id] = e.target.value
    setEmployee(employeeCopy)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const locationId = parseInt(employee.locationId)
    if (locationId === 0 || employee.name === "") {
      window.alert("Please pick a location, and give your name")
    } else {
      const newEmployee = {
        name: employee.name,
        locationId: locationId
      }

      addEmployee(newEmployee).then(() => navigate("/employees"))
    }
  }

  return (
    <form
      className="m-auto mt-[6em] flex w-[30rem] flex-col items-center justify-start rounded-2xl border-1 p-[2rem_4rem] shadow-md shadow-black"
      action=""
    >
      <h1 className="mb-10 text-4xl font-semibold tracking-wider">
        New Employee
      </h1>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="name">
          Employee Name
        </label>
        <input
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          id="name"
          required
          onChange={handleChange}
          value={employee.name}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="locationId">
          Location
        </label>
        <select
          onChange={handleChange}
          className="w-[80%] cursor-pointer self-center rounded-2xl border-1 pl-2"
          name="locationId"
          id="locationId"
        >
          <option value="0">Choose a Location</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>
              {l.name}
            </option>
          ))}
        </select>
      </fieldset>
      <button onClick={handleSubmit} className="btn transition hover:scale-110">
        Save Employee
      </button>
    </form>
  )
}
