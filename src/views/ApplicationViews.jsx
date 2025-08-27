import { Outlet, Route, Routes } from "react-router-dom"
import { AnimalList } from "../components/animal/AnimalList"
import { AnimalProvider } from "../components/animal/AnimalProvider"
import { CustomersProvider } from "../components/customers/CustomerProvider"
import { CustomersList } from "../components/customers/CustomersList"
import { EmployeeList } from "../components/employees/EmployeeList"
import { EmployeeProvider } from "../components/employees/EmployeeProvider"
import { LocationList } from "../components/location/Location"
import { LocationProvider } from "../components/location/LocationProvider"
import { NavBar } from "../components/nav/NavBar"
import { Welcome } from "../components/welcome/Welcome"

export const ApplicationViews = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <NavBar />
            <Outlet />
          </>
        }
      >
        <Route index element={<Welcome />} />
        <Route
          path="locations"
          element={
            <>
              <LocationProvider>
                <LocationList />
              </LocationProvider>
            </>
          }
        />

        <Route
          path="animals"
          element={
            <>
              <AnimalProvider>
                <AnimalList />
              </AnimalProvider>
            </>
          }
        />

        <Route
          path="employees"
          element={
            <>
              <EmployeeProvider>
                <EmployeeList />
              </EmployeeProvider>
            </>
          }
        />

        <Route
          path="customers"
          element={
            <>
              <CustomersProvider>
                <CustomersList />
              </CustomersProvider>
            </>
          }
        />
      </Route>
    </Routes>
  )
}
