import { useRef } from "react"


const Refhook = () => {

    const inputRef = useRef<HTMLInputElement>(null);

    const handleClick = () =>{
        console.log(inputRef?.current?.value)
        inputRef?.current?.focus();
    }

  return (
    <div>
        <h1>Chandan B</h1>
        <input type="text" placeholder = 'Example' ref={inputRef}/>
        <button onClick={handleClick}>Change Name</button>
    </div>
  )
}

export default Refhook