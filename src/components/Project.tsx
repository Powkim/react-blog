import axios from "axios";
import React from "react";
import { useEffect, useState } from "react"
import { styled } from "styled-components"


const ProjectPage=()=>{
    const [ProjectList,SetProjectList] =useState([])
    type ProjectMode={
        id:Number
    }
//     useEffect(async() => {
//         const posts = await axios({
//           mathod: 'get',
//           url: `http://localhost:3000/project`
//         //   headers: {
//         //     Authorization: token,
//         //   },
//         })
//         SetProjectList()
//    console.log(res.data)
//     });
//       }, []);
useEffect(() => {
    axios({
      method: 'get',
      url: `http://localhost:3000/project`,
    }).then((res) => {
        SetProjectList(res.data)
    });
  }, []);
      //          url: `http://localhost:3000/project`

    return  <Container>
        <ImageWrap>
            <ul>
{ProjectList.map((items :any)=>{
    return <li>
        {/* <img src={items.imageUrl}></img> */}
        <span>{items.title}</span>
    </li>
})}
</ul>
</ImageWrap>
    {/* <div>
<img src="https://github.com/codestates-seb/seb40_main_026/assets/107850055/02db135e-cb07-4300-a765-b6f8039032b1"></img>
<span></span>
    </div>
    <div>
<img src="https://github.com/codestates-seb/seb40_main_026/assets/107850055/02db135e-cb07-4300-a765-b6f8039032b1"></img>
    </div>
    <div>
<img src="https://github.com/codestates-seb/seb40_main_026/assets/107850055/02db135e-cb07-4300-a765-b6f8039032b1"></img>
    </div> */}
    </Container>
}
const Container =styled.div`
    margin: auto;
    width: 75%;
`
const ImageWrap=styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
margin-right: 1rem;
background-color: blue;
>li{
text-align: center;
    background-color:red
}`
export default ProjectPage