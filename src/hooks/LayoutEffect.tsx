import { useEffect, useLayoutEffect, useRef } from "react"

const LayoutEffect = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    useLayoutEffect(()=>{
        console.log(inputRef.current?.value);
    },[])

    useEffect(() => {
        inputRef.current.value = 'Chandan B';
    },[])


  return (
    <div>
        <input value='chandan' ref={inputRef} style={{width:'400',height:'400',border:'1px solid'}}/>
    </div>
  )
}

export default LayoutEffect