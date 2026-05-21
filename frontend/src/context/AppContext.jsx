import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const defaultSession = {
  language: null,
  sessionType: "",
  profile: null,
  activeSessionId: null,
  equipmentType: "",
  packagingType: "",
  materialType: "",
  quizAnswers: [],
  safetyAccepted: false,
  signature: null,
  entryValidationTime: null,
  entrySignature: null,
  exitSignature: null,
  exitTime: null,
  startTime: null,
  endTime: null,
};

export function AppProvider({ children }) {
  const [session, setSession] = useState(defaultSession);

  useEffect(() => {
    const savedSession = localStorage.getItem("paprec-session");

    if (!savedSession) return;

    try {
      const parsedSession = JSON.parse(savedSession);

      setSession({
        ...defaultSession,
        ...parsedSession,
      });
    } catch {
      setSession(defaultSession);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("paprec-session", JSON.stringify(session));
  }, [session]);

  const updateSession = (updates) => {
    setSession((previousSession) => ({
      ...previousSession,
      ...updates,
    }));
  };

  const resetSession = () => {
    localStorage.removeItem("paprec-session");
    setSession(defaultSession);
  };

  return (
    <AppContext.Provider
      value={{
        session,
        updateSession,
        resetSession,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => useContext(AppContext);