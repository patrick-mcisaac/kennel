import React from "react"
import { Login } from "./auth/Login"
import { Route, Routes } from "react-router-dom"
import { Authorized } from "../views/Authorized"
import { Register } from "./auth/Register"
import { ApplicationViews } from "../views/ApplicationViews"

export const Kennel = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

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
