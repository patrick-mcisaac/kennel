import { useContext } from "react"
import { AnimalContext } from "./AnimalProvider"

export const AnimalSearch = () => {
  const { setSearchTerms } = useContext(AnimalContext)
  return (
    <section className="flex items-center justify-end gap-[2rem] p-[2rem]">
      <h3>Animal Search</h3>
      <input
        className="w-[15rem] self-center rounded-2xl border-1 pl-2"
        type="text"
        onKeyUp={(e) => setSearchTerms(e.target.value)}
        placeholder="Search for an animal..."
      />
    </section>
  )
}
