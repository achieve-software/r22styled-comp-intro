import styled from "styled-components"


export const Button= styled.button`
/* background-color: hotpink;
color: white; */

background-color: ${(props) =>(props.primary) ? "white" : "hotpink"};
color: ${({primary}) => primary  ? "hotpink" : "white"};




width: 8rem;
padding: 1rem 2rem;
border-radius: 1rem;
border: 2px solid hotpink;
font-family: 'SegoeUI', Tahoma, Geneva, Verdana, sans-serif  ;
font-size: 1rem;
&:hover{
    transform: scale(.98);
    cursor: pointer;
}

`