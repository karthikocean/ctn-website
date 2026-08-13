import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
        <Route path="/future" element={<Future />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<BlogDetails />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/franchise" element={<Franchise />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/partner" element={<StubPage title="Partner With Us" />} />
        <Route path="/download" element={<StubPage title="Download App" />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </Router>
  );
}

export default App;
