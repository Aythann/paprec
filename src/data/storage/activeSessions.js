const ACTIVE_SESSIONS_KEY = "paprec-active-sessions";

export const getActiveSessions = () => {
  const savedSessions = localStorage.getItem(ACTIVE_SESSIONS_KEY);

  if (!savedSessions) return [];

  try {
    return JSON.parse(savedSessions);
  } catch {
    return [];
  }
};

export const saveActiveSessions = (sessions) => {
  localStorage.setItem(ACTIVE_SESSIONS_KEY, JSON.stringify(sessions));
};

export const addActiveSession = (session) => {
  const activeSessions = getActiveSessions();

  const sessionId = `${session.profile?.id || Date.now()}-${Date.now()}`;

  const newActiveSession = {
    id: sessionId,
    language: session.language,
    profile: session.profile,
    equipmentType: session.equipmentType,
    packagingType: session.packagingType,
    materialType: session.materialType,
    startTime: session.startTime,
    entryValidationTime: session.endTime,
    entrySignature: session.signature,
  };

  const filteredSessions = activeSessions.filter(
    (activeSession) =>
      activeSession.profile?.id !== newActiveSession.profile?.id,
  );

  saveActiveSessions([...filteredSessions, newActiveSession]);

  return newActiveSession;
};

export const removeActiveSession = (sessionId) => {
  const activeSessions = getActiveSessions();

  const updatedSessions = activeSessions.filter(
    (session) => session.id !== sessionId,
  );

  saveActiveSessions(updatedSessions);
};

export const findActiveSessionById = (sessionId) => {
  const activeSessions = getActiveSessions();

  return activeSessions.find((session) => session.id === sessionId) || null;
};