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
import { AddAnimal } from "../components/forms/AddAnimal"
import { HireEmployee } from "../components/forms/HireEmployee"
import { NewLocation } from "../components/forms/NewLocation"
import { AnimalDetails } from "../components/animal/AnimalDetails"

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

        <Route path="locations">
          <Route
            index
            element={
              <>
                <LocationProvider>
                  <LocationList />
                </LocationProvider>
              </>
            }
          />
          <Route
            path="new"
            element={
              <>
                <LocationProvider>
                  <NewLocation />
                </LocationProvider>
              </>
            }
          />
        </Route>

        <Route path="animals">
          <Route
            index
            element={
              <>
                <AnimalProvider>
                  <AnimalList />
                </AnimalProvider>
              </>
            }
          />
          <Route
            path="add"
            element={
              <>
                <>
                  <LocationProvider>
                    <CustomersProvider>
                      <AnimalProvider>
                        <AddAnimal />
                      </AnimalProvider>
                    </CustomersProvider>
                  </LocationProvider>
                </>
              </>
            }
          />
          <Route
            path="details/:animalId"
            element={
              <AnimalProvider>
                <AnimalDetails />
              </AnimalProvider>
            }
          />
        </Route>

        <Route path="employees">
          <Route
            index
            element={
              <>
                <EmployeeProvider>
                  <EmployeeList />
                </EmployeeProvider>
              </>
            }
          />
          <Route
            path="hire"
            element={
              <>
                <LocationProvider>
                  <EmployeeProvider>
                    <HireEmployee />
                  </EmployeeProvider>
                </LocationProvider>
              </>
            }
          />
        </Route>

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
