import React from "react"
import { LocationList } from "./location/Location"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { Outlet, Route, Routes } from "react-router-dom"
import { EmployeeProvider } from "./employees/EmployeeProvider"
import { EmployeeList } from "./employees/EmployeeList"
import { CustomersProvider } from "./customers/CustomerProvider"
import { CustomersList } from "./customers/CustomersList"

export const Kennel = () => {
  return (
    <>
      <LocationProvider>
        <LocationList />
      </LocationProvider>

      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>

      <EmployeeProvider>
        <EmployeeList />
      </EmployeeProvider>

      <CustomersProvider>
        <CustomersList />
      </CustomersProvider>
    </>
  )
}
