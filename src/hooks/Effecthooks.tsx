import axios from 'axios'
import { useEffect, useState } from 'react'

const Effecthooks = () => {

    const [data,setData] = useState('')

    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/comments?").then((res:any)=>{
         setData(res.data[0].email)
         console.log('api was called')
        })
    },[])
    
  return (
    <div> Hello {data}</div>
  )
}

export default Effecthooks