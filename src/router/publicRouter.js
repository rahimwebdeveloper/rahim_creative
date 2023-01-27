import About from "../components/About/About";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import Home from "../components/Home/Home";
import Project from "../components/Project/Project";
import Reviews from "../components/Reviews/Reviews";
import Services from "../components/Services/Services";

export const publicRouter = [
    { path: '/', Name: "Home", Component: Home },
    { path: '/home', Name: "Home", Component: Home },
    { path: '/service', Name: "Service", Component: Services },
    { path: '/reviews', Name: "Reviews", Component: Reviews },
    { path: '/projects', Name: "Project", Component: Project },
    { path: '/contact', Name: "Contact", Component: Contact },
    { path: '/about', Name: "About", Component: About },
    { path: '/Blog', Name: "Blog", Component: Blog },
];
