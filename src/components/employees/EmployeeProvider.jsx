import { createContext, useState } from "react"

export const EmployeeContext = createContext([])

export const EmployeeProvider = (props) => {
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    return fetch(
      `http://localhost:8088/employees?_expand=location&_sort=locationId`
    )
      .then((res) => res.json())
      .then(setEmployees)
  }

  const getEmployeeById = (id) => {
    return fetch(`http://localhost:8088/employees/${id}`).then((res) =>
      res.json()
    )
  }

  const putEmployee = (id, employeeObj) => {
    return fetch(`http://localhost:8088/employees/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
    })
  }

  const addEmployee = (employeeObj) => {
    return fetch(`http://localhost:8088/employees`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(employeeObj)
    })
  }

  return (
    <EmployeeContext.Provider
      value={{
        employees,
        setEmployees,
        getEmployees,
        addEmployee,
        getEmployeeById,
        putEmployee
      }}
    >
      {props.children}
    </EmployeeContext.Provider>
  )
}
