import { lazy } from "react";

const PagesLayout = lazy(() => import('@/components/layout/PagesLayout'))
const HomePage = lazy(() => import('@/pages/home/index'))

import { Route } from "react-router";

const route = [
    <Route element={<PagesLayout />}>
        <Route index element={<HomePage />} />
    </Route>
]

export default route