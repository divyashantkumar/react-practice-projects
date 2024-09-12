import { NavLink } from "react-router-dom"


function NotFound404() {
  return (
    <>
      <div id='oopss' className="bg-yellow-400 text-center py-5">
        <div id='error-text' className="flex flex-col justify-center h-auto">
          <img style={{ height: "100px" }} src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
          <span className="text-4xl font-medium">404 PAGE</span>
          <p className="p-a">
            . The page you were looking for could not be found</p>
          <NavLink to='/' className="text-3xl font-medium text-orange-700"> Home</NavLink>
        </div>
      </div>
    </>
  )
}

export default NotFound404