import React from "react"
import { LocationList } from "./location/Location"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"
import { LocationProvider } from "./location/LocationProvider"
import { Outlet, Route, Routes } from "react-router-dom"

export const Kennel = () => {
  return (
    <>
      <LocationProvider>
        <LocationList />
      </LocationProvider>

      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </>
  )
}
