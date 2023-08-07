import { useState } from "react"
import { Link } from "react-router-dom"
import { styled } from "styled-components"
const MenuContainer = styled.header`
    padding: 5rem;
    height:5rem;
    width: 70%;
    /* height: 100vh; */
    margin: auto;
    display: flex;
    /* flex-direction: ; */
    /* flex-direction:column; */
    align-items: center;
    >span{
        margin:auto;
        padding: 1rem;
        cursor: pointer;
    }
    
    .menuOn{
        color:red
    }
    ul{
        display: flex;
    }
    li{
    padding:1rem;
    /* margin: auto; */

    }`
const MenuItem= styled (Link)`
  box-shadow: grey 0px 0px 3px;
    >
`

const Menu = ()=> {
    const [MenuId,SetMenuId]=useState(4)

    const filterdata = [
        {
          id: 1,
          title: 'Main',
        },
        {
          id: 2,
          title: 'About',
        },
        {
          id: 3,
          title: 'Project',
        },
        {
          id: 4,  
          title: 'Study',
        }
      ];
      const filterOn = (id) => {
        if (id === MenuId) {
          SetMenuId(0);
        } else {
          SetMenuId(id);
        }


      };
    return <MenuContainer>
    {filterdata.map((items)=>{
        return<span key={items.id} onClick={(()=>filterOn(items.id))} className={MenuId===items.id?"menuOn":""} >{items.title}</span>
    })}
    </MenuContainer>
}
export default Menu