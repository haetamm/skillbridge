import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/HomePage";
import { urlPage } from "./utils/constans";
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./pages/CourseDetailPage";
import AboutPage from "./pages/AboutPage";
import PricePage from "./pages/PricePage";
import ContactPage from "./pages/ContactPage";
import RegisterPage from "./pages/RegisterPage";

const routerConfig = [
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "",
        element: <Navigate to="home" />,
      },
      {
        path: urlPage.HOME,
        element: <HomePage />,
      },
      {
        path: urlPage.COURSE,
        element: <CoursePage />,
      },
      {
        path: `${urlPage.COURSE}/:slug`,
        element: <CourseDetailPage />,
      },
      {
        path: `${urlPage.ABOUT}`,
        element: <AboutPage />,
      },
      {
        path: urlPage.PRICE,
        element: <PricePage />,
      },
      {
        path: urlPage.CONTACT,
        element: <ContactPage />,
      },
      {
        path: urlPage.SIGNUP,
        element: <RegisterPage />,
      },
    ],
  },
];

const router = createBrowserRouter(routerConfig);
export default router;
