

const baseURL = import.meta.env.VITE_BASE_URL || "http://localhost:5000";

export const useGoogleCallback = ()=>{
    window.open(`${baseURL}/api/auth/google`,)
}