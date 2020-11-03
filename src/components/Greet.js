import React from 'react'   

// function Greet(){

//     return <h1> hello vishwas</h1>
// }

const Greet = (props) =>{
    console.log(props)

    return   (
    <>
     <h1> hello {props.name} a.k.a {props.heroname}</h1>
    {props.children}
  </>
  )
}





export default Greet  