import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { LocationContext } from "./LocationProvider"

export const LocationDetails = () => {
  const { locationId } = useParams()
  const [location, setLocation] = useState({})

  const { locations, getLocations } = useContext(LocationContext)

  useEffect(() => {
    getLocations()
  }, [])

  useEffect(() => {
    const found = locations.find((l) => l.id === parseInt(locationId))
    setLocation(found)
  }, [locations, locationId])

  return (
    <main className="card-long m-auto mt-[8rem] flex-row items-start justify-evenly">
      <section className="items flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Animals</h1>
        <div>
          {location?.animals?.map((a) => (
            <p className="w-[100%]" key={a.id}>
              {a.name}
            </p>
          ))}
        </div>
      </section>
      <section className="flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">Employees</h1>
        <div>
          {location?.employees?.map((e) => (
            <p className="w-[100%]" key={e.id}>
              {e.name}
            </p>
          ))}
        </div>
      </section>
    </main>
  )
}
