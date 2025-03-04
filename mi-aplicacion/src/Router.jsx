import { createBrowserRouter } from "react-router-dom";
import Home from './pages/Home'
import Root from "./Root";
import Metodo from "./pages/Metodo/Metodo";
import Entrenamiento from "./pages/Entrenamiento/Entrenamiento";
import Vosotros from "./pages/Vosotros/Vosotros";
import Conecta from "./pages/Conecta/Contecta";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
              path: "/",
              element: <Home />
            },
            {
                path: "/metodo",
                element: <Metodo />
            },
            {
                path: "/entrenamiento",
                element: <Entrenamiento />
            },
            {
                path: "/vosotros",
                element: <Vosotros />
            },
            {
                path: "/conecta",
                element: <Conecta />
            },
        ]
    },
]);

export default router;