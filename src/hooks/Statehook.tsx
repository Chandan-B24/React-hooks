import { useState } from "react"

const Statehook = () => {

    const [count,setCount] = useState<number>(0)


    const handleIncrement = ():void => {
        setCount(count + 1);
    }

    const handleDecrement = () : void =>{
        count > 0 ? setCount(count - 1) : setCount(0);
    }


  return (
    <div className="counter">
        <center>{count}</center>
        <div className="btn-group">
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    </div>
  )
}

export default Statehook