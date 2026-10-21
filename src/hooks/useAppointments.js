import { useState, useEffect } from "react";
import { appointmentService } from "../services/appointmentService";

export const useAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAppointments = async () => {
        setLoading(true);
        try {
            const data = await appointmentService.getAll();
            setAppointments(data);
            setError(null);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const createAppointment = async (data) => {
        try {
            const response = await appointmentService.create(data);
            await fetchAppointments();
            return response;
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    const updateAppointment = async (id, data) => {
        try {
            const response = await appointmentService.update(id, data);
            await fetchAppointments();
            return response;
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    const deleteAppointment = async (id) => {
        try {
            await appointmentService.delete(id);
            await fetchAppointments();
        } catch (err) {
            throw new Error(err.message, { cause: err });
        }
    };

    useEffect(() => {
        // avoid synchronous setState inside effect body by deferring the call
        const t = setTimeout(() => {
            fetchAppointments();
        }, 0);
        return () => clearTimeout(t);
    }, []);

    return {
        appointments,
        loading,
        error,
        fetchAppointments,
        createAppointment,
        updateAppointment,
        deleteAppointment,
    };
};