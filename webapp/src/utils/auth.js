const getToken = () => localStorage.getItem('token');

const isAuthorized = () => (getToken() ? true : false);

export { getToken, isAuthorized };
