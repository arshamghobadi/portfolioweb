import './App.css';
import HomePage from './components/home/HomePage';
import Layout from './components/layout/Layout';
import { Routes, Route, Navigate } from 'react-router-dom';
import Projects from './components/projects/Projects';
import Posts from './components/posts/Posts';
import AboutMe from './components/aboutme/AboutMe';
import Email from './components/e-mail/Email';
import ProjectsDetials from './shared/ProjectsDetials';

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/Arsham-Ghobadi-Portfolio" element={<HomePage />} />
          <Route path="/portfolio/:slug" element={<ProjectsDetials />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/blogs" element={<Posts />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/e-mail" element={<Email />} />
          <Route
            path="/"
            element={<Navigate to="/Arsham-Ghobadi-Portfolio" />}
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
