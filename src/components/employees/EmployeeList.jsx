import { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider"

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext)

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <section>
      <h1>Employees</h1>
      <div>
        {employees?.map((employee) => {
          return (
            <div key={employee.id}>
              <p>{employee.name}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
