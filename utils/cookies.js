export function setSessionValue(cookieName, cookieValue) {
  sessionStorage.setItem(cookieName, JSON.stringify({ value: cookieValue }));
}

export function getSessionValue(cookieName) {
  const sessionData = JSON.parse(sessionStorage.getItem(cookieName));

  return sessionData ? sessionData.value : null;
}
