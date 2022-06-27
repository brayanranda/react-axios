export function getTokenApi() {
  return JSON.parse(localStorage.getItem("TOKEN"));
}

export function logoutApi() {
  localStorage.removeItem("TOKEN");
}

export function isUserLogedApi() {
  const token = getTokenApi();

  if (!token) {
    logoutApi();
    return null;
  }
  return token;
}
