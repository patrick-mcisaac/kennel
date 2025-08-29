import { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeDetails = () => {
  const { employeeId } = useParams()
  const { employees, getEmployees } = useContext(EmployeeContext)

  const [employee, setEmployee] = useState({})
  const navigate = useNavigate()

  useEffect(() => {
    getEmployees().then(() => {
      const found = employees.find((e) => e.id === parseInt(employeeId))
      setEmployee(found)
    })
  }, [employeeId, employees, employee])
  return (
    <main className="flex flex-col items-center justify-center">
      <section className="card-long m-auto mt-[10rem] flex-col">
        <h1 className="text-2xl">{employee?.name}</h1>
        <div className="flex flex-col gap-3">
          <p className="w-[100%]">{employee?.location?.name}</p>
          <p className="w-[100%]">{employee?.location?.address}</p>
        </div>
      </section>
      <button
        onClick={() => navigate(`/employees/details/${employeeId}/edit`)}
        className="btn mt-[2rem]"
      >
        Edit
      </button>
    </main>
  )
}
