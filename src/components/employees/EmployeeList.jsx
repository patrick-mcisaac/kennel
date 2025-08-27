import { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <section>
      <h1 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        Employees
      </h1>
      <div className="mt-[7rem] flex flex-col items-center gap-10">
        {employees?.map((employee) => {
          return (
            <div className="card" key={employee.id}>
              <p>{employee.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
