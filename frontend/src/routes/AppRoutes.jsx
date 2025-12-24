import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import MainLayout from '../layouts/MainLayout';
import Dashboard from '../pages/Dashboard';
import PdfTutor from '../pages/PdfTutor';
import Yoga from '../pages/Yoga';
import Squat from '../pages/Squat';
import Boxing from '../pages/Boxing';
import Dance from '../pages/Dance';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/pdf-tutor" element={<PdfTutor />} />
          <Route path="/yoga" element={<Yoga />} />
          <Route path="/squat" element={<Squat />} />
          <Route path="/boxing" element={<Boxing />} />
          <Route path="/dance" element={<Dance />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
 