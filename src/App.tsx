import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LoadingScreen } from "@/components/LoadingScreen";
import { DashboardLayout } from "@/components/DashboardLayout";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Education from "./pages/Education";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          {isLoading && <LoadingScreen onLoadingComplete={handleLoadingComplete} />}
          <BrowserRouter>
            <DashboardLayout>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/experience" element={<Experience />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/skills/:category" element={<Skills />} />
                <Route path="/education" element={<Education />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </DashboardLayout>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
