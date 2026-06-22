import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Navbar from './components/layout/Navbar';
import PageWrapper from './components/layout/PageWrapper';
import About from './sections/About/About';
import Hero from './sections/Hero/Hero';
import Skills from './sections/Skills/Skills';
import Projects from './sections/Projects/Projects';
import Experience from './sections/Experience/Experience';
import Contact from './sections/Contact/Contact';
export default function App() {
    return (_jsxs(PageWrapper, { children: [_jsx(Navbar, {}), _jsxs("main", { children: [_jsx(Hero, {}), _jsx(About, {}), _jsx(Skills, {}), _jsx(Projects, {}), _jsx(Experience, {}), _jsx(Contact, {})] })] }));
}
