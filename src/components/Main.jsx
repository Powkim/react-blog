import React from 'react';
import styled from 'styled-components';
// import Menu from './Menu';

const MainFrame = styled.div`
width: 100%;
height: 100vh;
display:flex;
flex-direction: center;
justify-content: center;
padding: 2rem;
    >div{
     
    }
`
const MainPage = () => {
    return (
        <div>
        <MainFrame>
            <div>
            {/* <Menu></Menu> */}
            </div>
        </MainFrame>
    </div>
    )

}

export default MainPage;
