import React from "react"
import { LocationList } from "./location/Location"
import { AnimalList } from "./animal/AnimalList"
import { AnimalProvider } from "./animal/AnimalProvider"

export const Kennel = () => {
  return (
    <>
      <h2>Nashville Kennels</h2>
      <LocationList />

      <AnimalProvider>
        <AnimalList />
      </AnimalProvider>
    </>
  )
}
