import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Team from './pages/team/Team';
import Contacts from './pages/Contacts/Contacts';
import Inovices from './pages/Inovices/Inovices';
import ProfilieForm from './pages/ProfilieForm/profilieForm';
import Calendar from './pages/Calendar/Calendar';
import Faq from './pages/Faq/Faq';
import BarChart from './pages/Bar/BarChart';
import PieChart from './pages/Pie/PieChart';
import LineChart from './pages/Line/LineChart';
import Geography from './pages/Geography/Geography';
import PageNotFound from './pages/PageNotFound/PageNotFound';






createRoot(document.getElementById('root')).render(
 
    <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Dashboard />} />
          <Route path="team" element={<Team/>} />
           <Route path="contacts" element={<Contacts/>} />
            <Route path="invoices" element={<Inovices/>} />
             <Route path="form" element={<ProfilieForm/>} />
              <Route path="calendar" element={<Calendar/>} />
               <Route path="faq" element={<Faq/>} />
                <Route path="bar" element={<BarChart/>} />
                <Route path="pie" element={<PieChart/>} />
                 <Route path="line" element={<LineChart/>} />
                  <Route path="geography" element={<Geography/>} />
                  <Route path="*" element={<PageNotFound/>} />

        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
 
)
