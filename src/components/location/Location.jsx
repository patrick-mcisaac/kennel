import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { useNavigate } from "react-router-dom"

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext)
  const navigate = useNavigate()

  useEffect(() => {
    getLocations()
  }, [])
  return (
    <article className="mb-10 flex flex-col items-center justify-start">
      <h2 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        List of Locations
      </h2>
      <button
        onClick={() => navigate("/locations/new")}
        className="btn mt-[4rem]"
      >
        Add Location
      </button>
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
