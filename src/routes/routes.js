//Layout
import Layout from "../layout/Layout"

//Pages
import Home from '../pages/Home'
import Details from "../pages/Details";

const routes = [
    {
        path: "/",
        layout: Layout,
        component: Home,
        exact: true,
    },
    {
        path: "/detalles/:id",
        layout: Layout,
        component: Details,
        exact: true,
    }
];

export default routes;