import { motion } from 'framer-motion';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import BookCall from './components/BookCall/BookCall';
import VideoSection from './components/VideoSection/VideoSection';
import Courses from './components/Courses/Courses';
import StudentFeedback from './components/StudentFeedback/StudentFeedback';
import CertifiedCourses from './components/CertifiedCourses/CertifiedCourses';
import Partners from './components/Partners/Partners';
import Footer from './components/Footer/Footer';
import styles from './App.module.css';

function App() {
  return (
    <div className={styles.app}>
      <Navbar />
      <Banner />
      <VideoSection />
      <Courses />
      <BookCall />
      <StudentFeedback /> 
      <CertifiedCourses />
      <BookCall />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;
