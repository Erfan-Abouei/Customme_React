import { lazy } from "react";

const PagesLayout = lazy(() => import('@/components/layout/PagesLayout'))
const HomePage = lazy(() => import('@/pages/home/index'))

import { createBrowserRouter } from "react-router";

const routes = createBrowserRouter([
    {
        // Layout Route
        element: <PagesLayout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    }
])

export default routes