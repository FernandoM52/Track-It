import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { myContext } from "./constants/myContext";
import PaginaLogin from './pages/PaginaLogin/PaginaLogin';
import PaginaCadastro from './pages/PaginaCadastro/PaginaCadastro';
import PaginaHabitos from './pages/PaginaHabitos/PaginaHabitos';
import PaginaHabitosHoje from './pages/PaginaHabitosHoje/PaginaHabitosHoje';
import PaginaHistorico from './pages/PaginaHistorico/PaginaHistorico';

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [image, setImage] = useState("");
  return (
    <>
      <BrowserRouter>
        <myContext.Provider value={{ isLogged, setIsLogged, image, setImage }}>
          <Routes>
            <Route path="/" element={<PaginaLogin />} />
            <Route path="/cadastro" element={<PaginaCadastro />} />
            <Route path="/habitos" element={<PaginaHabitos />} />
            <Route path="/hoje" element={<PaginaHabitosHoje />} />
            <Route path="/historico" element={<PaginaHistorico />} />
          </Routes>
        </myContext.Provider>
      </BrowserRouter>
    </>
  );
};