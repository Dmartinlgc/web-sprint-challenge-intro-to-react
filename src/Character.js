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
padding-left:1%;
padding-right:1%;
padding-bottom:1%;
box-shadow:black 3px;
background-image: url('https://us.123rf.com/450wm/natalia0103/natalia01031508/natalia0103150800030/44239332-diepe-ruimte-achtergrond-met-sterren-.jpg?ver=6');
margin-bottom: 60px;
border-radius: 10px;
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