import { useContext } from "react"
import { AppContext } from "./Context"

const Login = () => {

    const {setUserName} = useContext(AppContext)

  return (
    <div>
        <input type="text" onChange={(e)=>setUserName(e.target.value)}/>
    </div>
  )
}

export default Login