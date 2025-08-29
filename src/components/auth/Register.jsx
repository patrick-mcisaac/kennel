import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { CustomersContext } from "../customers/CustomerProvider"

export const Register = (props) => {
  // LOOK AT HONEY REA AND LEARN HOW TO DO IT

  // set customer state with default obj
  const [customer, setCustomer] = useState({
    name: "",
    address: ""
  })
  const navigate = useNavigate()

  const { addCustomer, getCustomers, customers } = useContext(CustomersContext)

  useEffect(() => {
    getCustomers()
  }, [])

  // register New User func
  //  create a new user
  //   if that user has id
  //      localStorage set item

  const registerNewUser = () => {
    addCustomer(customer)
      .then((res) => res.json())
      .then((createdUser) => {
        if (createdUser.hasOwnProperty("id")) {
          localStorage.setItem(
            "kennel_customer",
            JSON.stringify({
              id: createdUser.id
            })
          )
          navigate("/")
        }
      })
  }

  // handle Register
  //  prevent default
  //  get customers data
  //  check if that customer exists
  //    if it does, say so
  //    if not call the register new user func

  const handleRegister = (e) => {
    e.preventDefault()

    const found = customers.find((c) => c.name === customer.name)
    if (found) {
      window.alert("Customer Already Exists")
    } else {
      registerNewUser()
    }
  }

  // updateCustomer state func
  const updateCustomer = (e) => {
    const customerCopy = { ...customer }
    customerCopy[e.target.name] = e.target.value
    setCustomer(customerCopy)
  }
  //  copy {...}
  //  and update state with setCustomer

  // return html

  return (
    <main>
      <form action="" onSubmit={handleRegister}>
        <h1>Nashville Kennels</h1>
        <h2>Please Register</h2>
        <fieldset>
          <input
            type="text"
            onChange={updateCustomer}
            name="name"
            placeholder="Enter your name"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <input
            type="text"
            onChange={updateCustomer}
            name="address"
            placeholder="Enter your address"
            required
            autoFocus
          />
        </fieldset>
        <fieldset>
          <button type="submit">Register</button>
        </fieldset>
      </form>
    </main>
  )
}
