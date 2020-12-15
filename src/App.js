import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './header';
import Banner from './banner';

function App() {
  return (
    <div>
      <Header />
    <Banner />
    </div>
  );
}

export default App;




const Button = styled.button`
background: transparent;
border-radius: 3px;
border: 2px solid palevioletred;
color: palevioletred;
margin: 0 1em;
padding: 0.25em 1em;
`