import PagesLayout from "@/components/layout/PagesLayout";
import HomePage from "@/pages/home";

import { Route } from "react-router";

const route = [
    <Route element={<PagesLayout />}>
        <Route index element={<HomePage />} />
    </Route>
]

export default route