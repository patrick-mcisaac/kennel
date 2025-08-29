import { useContext, useEffect, useState } from "react"
import { EmployeeContext } from "../employees/EmployeeProvider"
import { useNavigate, useParams } from "react-router-dom"
import { LocationContext } from "../location/LocationProvider"

export const EditEmployee = () => {
  const { getEmployeeById, putEmployee } = useContext(EmployeeContext)
  const { getLocations, locations } = useContext(LocationContext)

  const navigate = useNavigate()

  const [employee, setEmployee] = useState({
    id: 0,
    name: "",
    locationId: 0
  })
  const { employeeId } = useParams()

  useEffect(() => {
    getEmployeeById(employeeId).then(setEmployee)
    getLocations()
  }, [])

  const handleChange = (e) => {
    const copy = { ...employee }
    copy[e.target.name] = e.target.value
    setEmployee(copy)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const copy = { ...employee }
    copy.locationId = parseInt(employee.locationId)

    if (copy.id === 0 || copy.name === "" || copy.locationId === 0) {
      window.alert("Please fill out form")
    } else {
      putEmployee(copy.id, copy).then(() => navigate("/employees"))
    }
  }

  return (
    <form
      className="m-auto mt-[.6rem] flex w-[30rem] flex-col items-center justify-start rounded-2xl border-1 p-[1rem_4rem] shadow-md shadow-black"
      action=""
    >
      <h1 className="mb-10 text-4xl font-semibold tracking-wider">
        Edit Employee
      </h1>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="name">
          Name
        </label>
        <input
          onChange={handleChange}
          className="w-[80%] self-center rounded-2xl border-1 pl-2"
          type="text"
          name="name"
          id="name"
          required
          value={employee.name}
        />
      </fieldset>
      <fieldset className="mb-10 flex w-[100%] flex-col items-start gap-3">
        <label className="text-xl" htmlFor="locationId">
          Locations
        </label>
        <select
          onChange={handleChange}
          className="w-[80%] cursor-pointer self-center rounded-2xl border-1 pl-2"
          name="locationId"
          id="locationId"
          value={employee.locationId}
        >
          <option value="0">Choose a location</option>
          {locations.map((l) => (
            <option key={l.id} value={l.id}>
              {l.name}
            </option>
          ))}
        </select>
      </fieldset>
      <button onClick={handleSubmit} className="btn transition hover:scale-110">
        Save
      </button>
    </form>
  )
}
