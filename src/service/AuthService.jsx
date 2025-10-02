import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import Swal from 'sweetalert2';

const API_URL = '';
const TOKEN_KEY = 'authToken';
const ROLE = '';
let axiosInterceptorId = null;

export const authService = {
    login: async (username, password) => {
        if (username === 'admin@gmail.com') {
            localStorage.setItem(TOKEN_KEY, "sihay");
            localStorage.setItem(ROLE,"ADMIN")
        } else if (username === 'recepcion@gmail.com') {
            localStorage.setItem(TOKEN_KEY, "sihay");
            localStorage.setItem(ROLE,"RECEPCION")
        }
        /*
        try {
            const response = await axios.get(`${API_URL}/auth/login`, {
                params: { username, password },
                headers: { 'Content-Type': 'application/json' }
            });
            const token = response.data;
            if (!token) throw new Error('No se recibió token');
            localStorage.setItem(TOKEN_KEY, token);
            authService.setupAxiosInterceptor();
            return { success: true };
        } catch (error) {
            // Manejo de error de login
            return {
                success: false,
                message: error.response?.data?.metadata[0]?.date || 'Credenciales incorrectas'
            };
        }*/
    },

    logout: () => {
        localStorage.removeItem(TOKEN_KEY);
        if (axiosInterceptorId !== null) {
            axios.interceptors.request.eject(axiosInterceptorId);
            axiosInterceptorId = null;
        }
    },

    isAuthenticated: () => {
        const token = localStorage.getItem(TOKEN_KEY);
        if (!token) return false;

        //Despues quitar esta linea y descomentar lo de abajo
        if (token) return true;

        /*
        try {
            const { exp } = jwtDecode(token);
            if (exp && Date.now() >= exp * 1000) {
                authService.logout();
                return false;
            }
            return true;
        } catch {
            return false;
        }
        */
    },

    getToken: () => localStorage.getItem(TOKEN_KEY),

    getRole: () => localStorage.getItem(ROLE),

    setupAxiosInterceptor: () => {
        // Evita múltiples interceptores
        if (axiosInterceptorId != null) {
            axios.interceptors.request.eject(axiosInterceptorId);
        }
        axiosInterceptorId = axios.interceptors.request.use(
            config => {
                const token = authService.getToken();
                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }
                return config;
            },
            error => Promise.reject(error)
        );
    },

    initializeAuth: () => {
        if (authService.isAuthenticated()) {
            authService.setupAxiosInterceptor();
        }
    },

};