import './App.css';
import { BrowserRouter,Route,Router, Routes } from 'react-router-dom';
import GlobalStyle from './styles/GlobalStyles';
import Menu from './components/Menu';
import AboutPage from './components/About';
import ProjectPage from './components/Project';
import StudyPage from './components/Study';
import MainPage from './components/Main';
import { styled } from 'styled-components';
// import Main
const Wrap=styled.div`
width: 70%;
margin: auto;
`
function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrap>
      <Menu></Menu>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/study" element={<StudyPage />} />
        </Routes>
        </Wrap>
    </BrowserRouter>
  );
}

export default App;
