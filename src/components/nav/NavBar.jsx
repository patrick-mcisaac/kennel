import { Link } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="flex h-20 w-[100vw] items-center justify-start bg-gray-900">
      <ul className="flex h-[100%] w-[100%] items-center justify-evenly text-center text-2xl font-semibold text-white">
        <Link
          className="flex h-[100%] basis-[20%] cursor-pointer items-center justify-center hover:bg-gray-500 hover:text-black"
          to="/"
        >
          <li>NSS Kennels</li>
        </Link>
        <Link
          className="flex h-[100%] basis-[20%] cursor-pointer items-center justify-center hover:bg-gray-500 hover:text-black"
          to="/locations"
        >
          <li>Locations</li>
        </Link>
        <Link
          className="flex h-[100%] basis-[20%] cursor-pointer items-center justify-center hover:bg-gray-500 hover:text-black"
          to="/animals"
        >
          <li>Animals</li>
        </Link>
        <Link
          className="flex h-[100%] basis-[20%] cursor-pointer items-center justify-center hover:bg-gray-500 hover:text-black"
          to="/customers"
        >
          <li>Customers</li>
        </Link>
        <Link
          className="flex h-[100%] basis-[20%] cursor-pointer items-center justify-center hover:bg-gray-500 hover:text-black"
          to="/employees"
        >
          <li>Employees</li>
        </Link>
      </ul>
    </nav>
  )
}
