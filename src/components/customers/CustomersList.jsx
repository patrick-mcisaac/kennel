import { useContext, useEffect } from "react"
import { CustomersContext } from "./CustomerProvider"

export const CustomersList = () => {
  const { customers, getCustomers } = useContext(CustomersContext)

  useEffect(() => {
    getCustomers()
  }, [])

  return (
    <div>
      <h1 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        Customers
      </h1>
      <div className="mt-[7rem] flex flex-col items-center gap-10">
        {customers?.map((customer) => {
          return (
            <div className="card" key={customer.id}>
              <p>{customer.name}</p>
              <p>{customer.address}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}
