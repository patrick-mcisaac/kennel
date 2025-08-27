import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()
  }, [])
  return (
    <article>
      <h2>List of Locations</h2>
      <section>
        {locations?.map((location) => {
          return (
            <div key={location.id}>
              <p>{location.name}</p>
              <p>{location.address}</p>
            </div>
          )
        })}
      </section>
    </article>
  )
}
