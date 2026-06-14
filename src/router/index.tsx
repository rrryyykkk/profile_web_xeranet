/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@/components/layout/RootLayout";

// Lazy-loaded pages
const HomePage = React.lazy(() => import("@/pages/HomePage"));
const AboutPage = React.lazy(() => import("@/pages/AboutPage"));
const ServicesPage = React.lazy(() => import("@/pages/ServicesPage"));
const BlogPage = React.lazy(() => import("@/pages/BlogPage"));
const BlogDetailPage = React.lazy(() => import("@/pages/BlogDetailPage"));
const ContactPage = React.lazy(() => import("@/pages/ContactPage"));
const NotFoundPage = React.lazy(() => import("@/pages/NotFoundPage"));
const ErrorPage = React.lazy(() => import("@/pages/ErrorPage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "blog/:id", element: <BlogDetailPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);
