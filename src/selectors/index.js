export const checkIsAuthenticated = (state) => {
  return !!state.auth.token;
};
