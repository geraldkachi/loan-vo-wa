import create from 'zustand';

const token = localStorage.getItem('@authorization');

const useAuth = create(set => ({
  isAuthenticated: !!token,
  token: token,
  email: null,
}));

export default useAuth;