import './App.scss';
import Layout from './components/Layout/Layout';
import {Route, Routes } from 'react-router-dom';
import ButtonSet from './components/ButtonSet/ButtonSet';

function App() {
  return (
    <Routes>
    <Route path="/" element={<Layout/>}/>
    <Route path="/bottoni" element={<ButtonSet/>}/>
    </Routes>
  );
}

export default App;
