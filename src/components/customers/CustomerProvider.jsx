import { createContext, useState } from "react"

export const CustomersContext = createContext()

export const CustomersProvider = (props) => {
  const [customers, setCustomers] = useState([])

  const getCustomers = () => {
    return fetch(`http://localhost:8088/customers`)
      .then((res) => res.json())
      .then(setCustomers)
  }

  const addCustomer = (customerObj) => {
    return fetch(`http://localhost:8088/customers`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(customerObj)
    })
  }

  return (
    <CustomersContext.Provider
      value={{ customers, setCustomers, getCustomers, addCustomer }}
    >
      {props.children}
    </CustomersContext.Provider>
  )
}
