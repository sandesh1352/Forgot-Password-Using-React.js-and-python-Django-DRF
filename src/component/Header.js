import React from 'react'
export default function Header(props){
    return(
        <div style={{textAlign:"center",justifyContent:"center",border:"1px solid black",margin:"5%",backgroundColor:"#D9DA66"}}>
            <header>
                <h2>Welcome {props.name}</h2>
            </header>
        </div>
    )
}