import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
    FaCalendarCheck,
    FaEye,
    FaCheck,
    FaTimes,
    FaClock
} from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import { appointmentService } from "../services/appointmentService";

const Dashboard = () => {
    const { user } = useAuth();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAppointments = async () => {
            try {
                const data = await appointmentService.getAll();
                setAppointments(data);
            } catch (error) {
                console.error('Error fetching appointments:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchAppointments();
    }, []);

    const getStatusBadge = (status) => {
        const styles = {
            pending: 'bg-yellow-500/20 text-yellow-400',
            confirmed: 'bg-green-500/20 text-green-400',
            completed: 'bg-blue-500/20 text-blue-400',
            cancelled: 'bg-red-500/20 text-red-400',
        };
        const icons = {
            pending: <FaClock size={12} />,
            confirmed: <FaCheck size={12} />,
            completed: <FaCheck size={12} />,
            cancelled: <FaTimes size={12} />,
        };
        return (
            <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${styles[status] || styles.pending}`}>
                {icons[status] || icons.pending}
                {status}
            </span>
        );
    };

    const stats = [
        { label: 'Total Appointments', value: appointments.length, icon: FaCalendarCheck, color: 'gold' },
        { label: 'Pending', value: appointments.filter(a => a.status === 'pending').length, icon: FaClock, color: 'yellow' },
        { label: 'Confirmed', value: appointments.filter(a => a.status === 'confirmed').length, icon: FaCheck, color: 'green' },
        { label: 'Cancelled', value: appointments.filter(a => a.status === 'cancelled').length, icon: FaTimes, color: 'red' },
    ];

    const recentAppointments = appointments.slice(0, 5);

    if (loading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-gold-500 border-t-transparent rounded-full animate-spin" />
            </div>
        );
    }

    return (
        <div className="py-8">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-playfair gold-text font-bold">
                            Welcome back, {user?.name || 'Admin'}!
                        </h1>
                        <p className="text-gray-400 text-sm mt-1">
                            Here's what's happening at Alchemist Glow Studio
                        </p>
                    </div>
                    <Link to="/booking" className="btn-primary text-sm px-4 py-2">
                        + New Booking
                    </Link>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="bg-black-800/50 p-4 rounded-xl border border-gold-500/20">
                                <div className="flex items-center gap-3">
                                    <div className={`p-2 rounded-lg bg-${stat.color}-500/10`}>
                                        <Icon className={`text-${stat.color}-400`} size={18} />
                                    </div>
                                    <div>
                                        <p className="text-gray-400 text-xs uppercase tracking-wider">{stat.label}</p>
                                        <p className="text-2xl font-playfair gold-text font-bold">{stat.value}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Recent Appointments */}
                <div className="bg-black-800/50 p-6 rounded-xl border border-gold-500/20">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-playfair gold-text font-bold">Recent Appointments</h2>
                        <button className="text-gold-400 text-sm hover:text-gold-300 transition-colors">
                            View All
                        </button>
                    </div>

                    {recentAppointments.length === 0 ? (
                        <div className="text-center py-12 text-gray-400">
                            <p>No appointments yet</p>
                            <Link to="/booking" className="text-gold-400 hover:text-gold-300 text-sm mt-2 inline-block">
                                Create your first booking
                            </Link>
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gold-500/20">
                                        <th className="text-left py-3 text-sm text-gray-400 font-medium">Client</th>
                                        <th className="text-left py-3 text-sm text-gray-400 font-medium hidden md:table-cell">Service</th>
                                        <th className="text-left py-3 text-sm text-gray-400 font-medium hidden md:table-cell">Date</th>
                                        <th className="text-left py-3 text-sm text-gray-400 font-medium">Status</th>
                                        <th className="text-right py-3 text-sm text-gray-400 font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {recentAppointments.map((appointment) => (
                                        <tr key={appointment._id} className="border-b border-gold-500/10 hover:bg-gold-500/5 transition-colors">
                                            <td className="py-3">
                                                <div>
                                                    <p className="text-white text-sm font-medium">{appointment.userName}</p>
                                                    <p className="text-gray-400 text-xs">{appointment.userPhone}</p>
                                                </div>
                                            </td>
                                            <td className="py-3 text-gray-400 text-sm hidden md:table-cell">{appointment.serviceName}</td>
                                            <td className="py-3 text-gray-400 text-sm hidden sm:table-cell">
                                                {new Date(appointment.bookingDate).toLocaleDateString('en-IN', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                })}
                                            </td>
                                            <td className="py-3">{getStatusBadge(appointment.status)}</td>
                                            <td className="py-3 text-right">
                                                <button className="text-gold-400 hover:text-gold-300 transition-colors">
                                                    <FaEye size={14} />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dashboard;