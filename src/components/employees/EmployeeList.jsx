import { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"
import { Link, useNavigate } from "react-router-dom"

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
      <div className="mt-[5rem] flex w-[80%] flex-wrap items-center justify-between gap-20">
        {employees?.map((employee) => {
          return (
            <Link to={`/employees/details/${employee.id}`} key={employee.id}>
              <div className="card hover:scale-110">
                <p className="">{employee.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
