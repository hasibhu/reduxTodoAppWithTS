import App from "@/App";
import HomePage from "@/home/HomePage";
import Login from "@/pages/Login";
import Todo from "@/pages/Todo";
import { createBrowserRouter } from "react-router-dom";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App></App>,
        children: [
            {
            path: '/', //index:true
            element: <HomePage/>
            },
            {
            path: '/login',
            element: <Login/>
            },
            {
            path: '/todo',
            element: <Todo></Todo>
            },

        ]
    },

    
])



export default routes;