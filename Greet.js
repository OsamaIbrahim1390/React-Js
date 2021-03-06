import React from 'react'
//function Greet(){
    //return <h1>Hello Osama</h1>
//}
const Greet=props => {
    const {name,profession}=props
    
return(<div> <h1> {name} profession is{profession}</h1>

</div>
)}
export default Greet