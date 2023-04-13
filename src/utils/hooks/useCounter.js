import { useState } from "react"

const useCounter = (initial) => {
  
    const [counter, setCounter] = useState(initial)

    const increment = ()=>{
        setCounter( counter + 1 )
    }

    const decrement = ()=>{
        if( counter > 0){
            setCounter( counter - 1)
        }else{
            alert("el contador no puede ser menor que cero")
        }
    }

    const reset = ()=>{
        setCounter(0)
    }

    return { counter, increment, decrement, reset }

}

export default useCounter