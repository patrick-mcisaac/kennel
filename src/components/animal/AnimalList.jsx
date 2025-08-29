import { useContext, useEffect, useState } from "react"
import { AnimalContext } from "./AnimalProvider"
import { Link, useNavigate } from "react-router-dom"

export const AnimalList = () => {
  const navigate = useNavigate()
  const { animals, getAnimals, searchTerms } = useContext(AnimalContext)

  const [filtered, setFiltered] = useState([])
  useEffect(() => {
    getAnimals()
  }, [])

  useEffect(() => {
    if (searchTerms !== "") {
      const filteredAnimals = animals.filter((a) =>
        a.name.toLowerCase().includes(searchTerms.toLowerCase())
      )
      setFiltered(filteredAnimals)
    } else {
      setFiltered(animals)
    }
  }, [searchTerms, animals])

  return (
    <section className="mb-10 flex flex-col items-center justify-start">
      <h1 className="mt-10 text-center text-[3rem] font-semibold tracking-wider">
        Animals
      </h1>

      <button
        onClick={() => navigate("/animals/add")}
        className="btn mt-[4rem] transition hover:scale-110"
      >
        Make Reservation
      </button>
      <div className="mt-[5rem] flex w-[80%] flex-wrap items-center justify-between gap-20">
        {filtered.map((animal) => {
          return (
            <Link key={animal.id} to={`/animals/details/${animal.id}`}>
              <div className="card transition hover:scale-110">
                <p className="text-2xl tracking-wider">{animal.name}</p>
              </div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
