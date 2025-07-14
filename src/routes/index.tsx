import { createBrowserRouter } from "react-router";
import { lazy } from "react";

const PagesLayout = lazy(() => import('@/components/layout/PagesLayout'))
const HomePage = lazy(() => import('@/pages/home/index'))

const routes = createBrowserRouter([
    {
        // Layout Route
        element: <PagesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            },
        ]
    }
])

export default routes