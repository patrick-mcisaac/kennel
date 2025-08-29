import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider"
import { Link, useNavigate } from "react-router-dom"

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
        className="btn mt-[4rem] transition hover:scale-110"
      >
        Add Location
      </button>
      <section className="mt-[7rem] flex flex-col items-center gap-10">
        {locations?.map((location) => {
          return (
            <Link to={`/locations/${location.id}`} key={location.id}>
              <div className="card-long transition hover:scale-110">
                <h1 className="text-2xl">{location.name}</h1>
                <p className="text-2xl">
                  {location.employees.length} Employee
                  {location.employees.length === 1 ? "" : "s"}
                </p>
                <p className="text-2xl">
                  {location.animals.length} animal
                  {location.animals.length === 1 ? "" : "s"} being treated
                </p>
              </div>
            </Link>
          )
        })}
      </section>
    </article>
  )
}
