import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import AppRouter from "./router/AppRouter";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename="/paprec">
        <AppRouter />
      </BrowserRouter>
    </AppProvider>
  );
}