import { useReducer } from "react"


type State = {
    count : number,
    showText : boolean
}

type Action = { type: "INCREMENT" } | { type: "toggleShowText" };


const Reducerhokk = () => {

    const reducer = (state:State,action:Action):State => {
        switch(action.type){
            case "INCREMENT" : return {count : state.count + 1,showText : state.showText}

            case "toggleShowText" : return {count : state.count,showText : !state.showText}

            default : return state
        }
    }


    const [state,dispatch] = useReducer(reducer,{count : 0, showText : true})

    const handleClick = () =>{
       dispatch({type : "INCREMENT"})
       dispatch({type : "toggleShowText"})
    }

  return (

    <div className="reducer-container">
        <h1>{state.count}</h1>
        <button onClick={handleClick}>click</button>
       { state.showText && <p>This is a test</p>}
    </div>
  )
}

export default Reducerhokk