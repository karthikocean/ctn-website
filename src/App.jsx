import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import MembershipPlans from './pages/MembershipPlans';
import Future from './pages/Future';
import Contact from './pages/Contact';
import Blogs from './pages/Blogs';
import BlogDetails from './pages/BlogDetails';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import Franchise from './pages/Franchise';
import StubPage from './pages/StubPage';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import RefundPolicy from './pages/RefundPolicy';
import CommunityGuidelines from './pages/CommunityGuidelines';
import DownloadRedirect from './pages/DownloadRedirect';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import './styles/Global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership-plans" element={<MembershipPlans />} />
        <Route path="/pricing" element={<MembershipPlans />} />
        <Route path="/features" element={<Future />} />
        <Route path="/future" element={<Navigate to="/features" replace />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsAndConditions />} />
        <Route path="/terms" element={<Navigate to="/terms-condition" replace />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/refund" element={<Navigate to="/refund-policy" replace />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/partner" element={<StubPage title="Partner With Us" />} />
        <Route path="/download" element={<DownloadRedirect />} />
        <Route path="/app-download" element={<DownloadRedirect />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </Router>
  );
}

export default App;
