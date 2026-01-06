import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "@/pages/Index";
import NotFound from "@/pages/NotFound";
import BlogPage from "@/pages/BlogPage";
import BlogPostPage from "@/pages/BlogPostPage";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import AboutUsPage from "@/pages/AboutUsPage";
import PackagesPage from "@/pages/PackagesPage";
import ROICalculatorPage from "@/pages/ROICalculatorPage";
import SiteAuditPage from "@/pages/SiteAuditPage";
import ServicesPage from "@/pages/ServicesPage";
import PageTransition from "./PageTransition";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition><Index /></PageTransition>
        } />
        <Route path="/blog" element={
          <PageTransition><BlogPage /></PageTransition>
        } />
        <Route path="/blog/:slug" element={
          <PageTransition><BlogPostPage /></PageTransition>
        } />
        <Route path="/privacy-policy" element={
          <PageTransition><PrivacyPolicy /></PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition><AboutUsPage /></PageTransition>
        } />
        <Route path="/packages" element={
          <PageTransition><PackagesPage /></PageTransition>
        } />
        <Route path="/roi-calculator" element={
          <PageTransition><ROICalculatorPage /></PageTransition>
        } />
        <Route path="/site-audit" element={
          <PageTransition><SiteAuditPage /></PageTransition>
        } />
        <Route path="/services" element={
          <PageTransition><ServicesPage /></PageTransition>
        } />
        <Route path="*" element={
          <PageTransition><NotFound /></PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
