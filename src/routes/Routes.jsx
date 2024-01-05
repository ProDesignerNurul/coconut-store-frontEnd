import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../components/Home/Home/Home";
import Error404 from "../components/Error404/Error404";
import Coconuts from "../components/Home/Coconuts/Coconuts/Coconuts";
import SingleCoconutDetails from "../components/Home/Coconuts/SingleCoconutDetails/SingleCoconutDetails";
import Contact from "../components/Contact/Contact/Contact";
import About from "../components/Home/About/About";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch(`https://coconut-store-backend.onrender.com/coconuts`)
            },
            {
                path: '/coconuts',
                element: <Coconuts></Coconuts>,
                loader: () => fetch(`https://coconut-store-backend.onrender.com/coconuts`)
            },
            {
                path: '/coconuts/:id',
                element: <SingleCoconutDetails></SingleCoconutDetails>,
                loader: ({params}) => fetch(`https://coconut-store-backend.onrender.com/coconuts/${params.id}`)
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '*',
                element: <Error404></Error404>
            }
        ]
    }
]);


export default router;