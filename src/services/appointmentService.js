import api from "./api";

export const appointmentService = {
    // Create a new appointment
    create: async (data) => {
        const response = await api.post("/appointments", data);
        return response.data;
    },

    // Get all appointments (admin only)
    getAll: async () => {
        const response = await api.get('/appointments');
        return response.data;
    },

    // Get single appointment (admin only)
    getById: async (id) => {
        const response = await api.get(`/appointments/${id}`);
        return response.data;
    },

    // Update appointment (admin only)
    update: async (id, data) => {
        const response = await api.put(`/appointments/${id}`, data);
        return response.data;
    },

    // Delete appointment (admin only)
    delete: async (id) => {
        const response = await api.delete(`/appointments/${id}`);
        return response.data;
    },
};