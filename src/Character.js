import React, {useEffect, useState} from 'react'
import Styled from 'styled-components'

const Stylewars = Styled.div` 
display:flex;
width: 80%;
color: gold;
margin:0 auto;
justify-content:space-between;
font-family: 'Orbitron', sans-serif;
text-shadow: brown 3px 3px;
padding-top: 1%;
padding-bottom:1%;
box-shadow:black 3px;
`

const Character = (props)=>{
const {characterInfo} = props; 
return(
<Stylewars>
    <h2>{characterInfo.name}</h2>
    <h2>{characterInfo.birth_year}</h2>
</Stylewars>
)
}
export default Character;