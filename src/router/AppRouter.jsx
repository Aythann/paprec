import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SessionTypePage from "../pages/SessionTypePage";
import SearchDriverPage from "../pages/SearchDriverPage";
import NewDriverPage from "../pages/NewDriverPage";
import ConfirmDriverPage from "../pages/ConfirmDriverPage";
import EditDriverPage from "../pages/EditDriverPage";
import ConfirmNewDriverPage from "../pages/ConfirmNewDriverPage";
import VehiclePage from "../pages/VehiclePage";
import SafetyPage from "../pages/SafetyPage";
import SpecificRulesPage from "../pages/SpecificRulesPage";
import QuizPage from "../pages/QuizPage";
import SummaryPage from "../pages/SummaryPage";
import DeparturePage from "../pages/DeparturePage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/session-type" element={<SessionTypePage />} />
      <Route path="/search" element={<SearchDriverPage />} />
      <Route path="/new-driver" element={<NewDriverPage />} />
      <Route path="/confirm-driver" element={<ConfirmDriverPage />} />
      <Route path="/edit-driver" element={<EditDriverPage />} />
      <Route path="/confirm-new-driver" element={<ConfirmNewDriverPage />} />
      <Route path="/vehicle" element={<VehiclePage />} />
      <Route path="/safety" element={<SafetyPage />} />
      <Route path="/specific-rules" element={<SpecificRulesPage />} />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/summary" element={<SummaryPage />} />
      <Route path="/departure" element={<DeparturePage />} />
    </Routes>
  );
}