import React, { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { CustomersContext } from "../customers/CustomerProvider"

export const Login = () => {
  // LOOK AT HONEY REA AND LEARN HOW TO DO IT
  const [customer, setCustomer] = useState({
    name: ""
  })

  const { customers, getCustomers } = useContext(CustomersContext)
  const navigate = useNavigate()

  useEffect(() => {
    getCustomers()
  }, [])

  // set state for login info

  // set useNavigate
  const handleLogin = (e) => {
    e.preventDefault()

    const foundCustomer = customers.find((c) => {
      return c.name === customer.name
    })

    if (foundCustomer) {
      localStorage.setItem(
        "kennel_customer",
        JSON.stringify({
          id: foundCustomer.id
        })
      )
      navigate("/")
    } else {
      window.alert("Invalid Login")
    }
  }

  // handle login function
  //  prevent default
  //   get the user by what ever im checking with
  //    set local storage to kennel_customer, JSON.stringify id: id

  //    navigate to home

  // return the html for login page

  return (
    <main>
      <section>
        <form action="" onSubmit={handleLogin}>
          <h1>Nashville Kennels</h1>
          <h2>Please Sign In</h2>
          <fieldset>
            <input
              type="text"
              value={customer.name}
              onChange={(e) => {
                const customerCopy = { ...customer }
                customerCopy[e.target.name] = e.target.value
                setCustomer(customerCopy)
              }}
              placeholder="Name"
              name="name"
              required
              autoFocus
            />
          </fieldset>
          <fieldset>
            <button type="submit">Sign In</button>
          </fieldset>
        </form>
      </section>
      <section>
        <Link to="/register">Not a member yet?</Link>
      </section>
    </main>
  )
}
