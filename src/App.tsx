import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import PageTransition from "@/components/PageTransition";
import Index from "./pages/Index.tsx";
import BuilderPage from "./pages/BuilderPage.tsx";
import PreviewPage from "./pages/PreviewPage.tsx";
import NotFound from "./pages/NotFound.tsx";

import { useEffect } from "react";
import { trackPageView } from "./utils/analytics";

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    // Small delay to ensure route transitions are complete and titles are set
    const timer = setTimeout(() => {
      trackPageView(location.pathname + location.search);
    }, 150);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        <Route path="/builder" element={<PageTransition><BuilderPage /></PageTransition>} />
        <Route path="/preview" element={<PageTransition><PreviewPage /></PageTransition>} />
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
