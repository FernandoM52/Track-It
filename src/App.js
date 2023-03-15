import styled from 'styled-components';
import PaginaLogin from './pages/PaginaLogin/PaginaLogin';
import PaginaCadastro from './pages/PaginaCadastro/PaginaCadastro';
import PaginaHabitos from './pages/PaginaHabitos/PaginaHabitos';
import PaginaHabitosHoje from './pages/PaginaHabitosHoje/PaginaHabitosHoje';
import PaginaHistorico from './pages/PaginaHistorico/PaginaHistorico';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaLogin />} />
          <Route path="/cadastro" element={<PaginaCadastro />} />
          <Route path="/habitos" element={<PaginaHabitos />} />
          <Route path="/hoje" element={<PaginaHabitosHoje />} />
          <Route path="/historico" element={<PaginaHistorico />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};