import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import BookingForm from "../components/BookingForm";
import { FaCheckCircle } from "react-icons/fa";

const Booking = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const preselectedService = location.state?.service || '';
    const [success, setSuccess] = useState(false);
    const [bookingData, setBookingData] = useState(null);

    const handleSuccess = (data) => {
        setSuccess(true);
        setBookingData(data);
        setTimeout(() => {
            navigate('/');
        }, 5000);
    };

    const handleError = (error) => {
        alert(error || 'Something went wrong. Please try again.');
    };

    if (success) {
        return (
            <MainLayout>
                <div className="min-h[70vh] flex items-center justify-center py-20">
                    <div className="text-center max-w-md mx-auto bg-black-800/50 p-8 rounded-2xl border border-gold-500/30">
                        <FaCheckCircle className="text-gold-400 text-6xl mx-auto mb-4" />
                        <h2 className="text-3xl font-playfair gold-text font-bold mb-3">
                            Booking Confirmed!
                        </h2>
                        <p className="text-gray-400 mb-6">
                            Thank you {bookingData?.userName}! Your appointment has been confirmed.
                        </p>
                        <div className="bg-black-700/50 rounded-lg p-4 text-left space-y-2 mb-6">
                            <p className="text-sm"><span className="text-gold-400">Service:</span> {bookingData?.serviceName}</p>
                            <p className="text-sm"><span className="text-gold-400">Date:</span> {new Date(bookingData?.bookingDate).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                            <p className="text-sm"><span className="text-gold-400">Time:</span> {bookingData?.bookingTime}</p>
                        </div>
                        <p className="text-sm text-gray-500">
                            Check your WhatsApp for confirmation details
                        </p>
                    </div>
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout>
            <div className="py-20">
                <div className="container mx-auto px-4 max-w-lg">
                    <div className="text-center mb-10">
                        <h1 className="text-4xl font-playfair gold-text font-bold mb-4">
                            Book Appointment
                        </h1>
                        <p className="text-gray-400">
                            Schedule your beauty transformation with us
                        </p>
                    </div>

                    <div className="bg-black-800/50 p-6 md:p-8 rounded-2xl border border-gold-500/20">
                        <BookingForm
                            preselectedService={preselectedService}
                            onSuccess={handleSuccess}
                            onError={handleError}
                        />
                    </div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Booking;