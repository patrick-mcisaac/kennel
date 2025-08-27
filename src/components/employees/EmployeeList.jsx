import { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { useNavigate } from "react-router-dom"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  const navigate = useNavigate()

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <section className="mb-10 flex flex-col items-center justify-start">
      <h1 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        Employees
      </h1>
      <button
        onClick={() => navigate("/employees/hire")}
        className="btn mt-[4rem] p-1"
      >
        Hire Employee
      </button>
      <div className="mt-[5rem] flex flex-col items-center gap-10">
        {employees?.map((employee) => {
          return (
            <div className="card" key={employee.id}>
              <p>{employee.name}</p>
              <p>{employee.location.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
