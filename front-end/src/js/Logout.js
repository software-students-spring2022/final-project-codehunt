const { useEffect } = require("react")
const { Navigate } = require("react-router-dom")

export default function Logout(props) {
  useEffect(() => {
    localStorage.removeItem("token")
  }, [])

  return <Navigate to="/" replace={true} state={{ isLoggedIn: false }} />
}
