import React from "react"
import { Login } from "./auth/Login"
import { Route, Routes } from "react-router-dom"
import { Authorized } from "../views/Authorized"
import { Register } from "./auth/Register"
import { ApplicationViews } from "../views/ApplicationViews"
import { CustomersProvider } from "./customers/CustomerProvider"

export const Kennel = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={
          <CustomersProvider>
            <Login />
          </CustomersProvider>
        }
      />
      <Route
        path="/register"
        element={
          <CustomersProvider>
            <Register />
          </CustomersProvider>
        }
      />

      <Route
        path="*"
        element={
          <Authorized>
            <ApplicationViews />
          </Authorized>
        }
      />
    </Routes>
  )
}
