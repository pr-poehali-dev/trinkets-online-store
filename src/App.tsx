
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {/* Пути для других страниц (пока без реализации) */}
          <Route path="/catalog" element={<NotFound />} />
          <Route path="/catalog/:category" element={<NotFound />} />
          <Route path="/delivery" element={<NotFound />} />
          <Route path="/contacts" element={<NotFound />} />
          <Route path="/about" element={<NotFound />} />
          <Route path="/payment" element={<NotFound />} />
          <Route path="/faq" element={<NotFound />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
