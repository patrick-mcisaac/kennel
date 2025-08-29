import { createContext, useState } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
  const [locations, setLocations] = useState([])

  const getLocations = () => {
    return fetch(
      `http://localhost:8088/locations?_embed=employees&_embed=animals`
    )
      .then((res) => res.json())
      .then(setLocations)
  }

  const getLocationById = (id) => {
    return fetch(`http://localhost:8088/locations/${id}`).then((res) =>
      res.json()
    )
  }

  const putLocation = (id, locationObj) => {
    return fetch(`http://localhost:8088/locations/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(locationObj)
    }).then(getLocations)
  }

  const addLocation = (locationObj) => {
    return fetch(`http://localhost:8088/locations`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(locationObj)
    }).then(getLocations)
  }

  return (
    <LocationContext.Provider
      value={{
        locations,
        setLocations,
        getLocations,
        addLocation,
        getLocationById,
        putLocation
      }}
    >
      {props.children}
    </LocationContext.Provider>
  )
}
