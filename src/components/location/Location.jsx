import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()
  }, [])
  return (
    <article>
      <h2 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        List of Locations
      </h2>
      <section className="mt-[7rem] flex flex-col items-center gap-10">
        {locations?.map((location) => {
          return (
            <div className="card" key={location.id}>
              <p>{location.name}</p>
              <p>{location.address}</p>
            </div>
          )
        })}
      </section>
    </article>
  )
}
