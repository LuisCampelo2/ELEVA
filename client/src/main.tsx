import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App.tsx'
import { HomePage } from './pages/homePage.tsx';
import { Projects } from './pages/projects.tsx';
import { Students } from './pages/students.tsx';
import { Contacts } from './pages/contacts.tsx';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
      <Route index element={<HomePage/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/students' element={<Students/>}/>
       <Route path='/contacts' element={<Contacts/>}/>
      </Route>
    </Routes>
  </BrowserRouter>

)
