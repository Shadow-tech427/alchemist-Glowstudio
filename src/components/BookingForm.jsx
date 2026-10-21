import React, { useState } from "react";
import {
  FaUser,
  FaPhone,
  FaScissors,
  FaCalendar,
  FaClock,
  FaWhatsapp,
} from "react-icons/fa6";
import { appointmentService } from "../services/appointmentService";

const BookingForm = ({ preselectedService, onSuccess, onError }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    userPhone: "",
    serviceName: preselectedService || "",
    bookingDate: "",
    bookingTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getMaxDate = () => {
    const date = new Date();
    date.setDate(date.getDate() + 30);
    return date.toISOString().split("T")[0];
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 10; hour <= 20; hour++) {
      const time = `${hour.toString().padStart(2, "0")}:00`;
      slots.push(time);
      if (hour < 20) {
        slots.push(`${hour.toString().padStart(2, "0")}:30`);
      }
    }
    return slots;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await appointmentService.create(formData);
      if (response.success) {
        onSuccess?.(response.data);
      }
    } catch (error) {
      onError?.(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label className="label-text flex items-center gap-2">
          <FaUser size={14} /> Your Name *
        </label>
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Enter your full name"
        />
      </div>

      <div>
        <label className="label-text flex items-center gap-2">
          <FaPhone size={14} /> Phone Number (WhatsApp) *
        </label>
        <input
          type="tel"
          name="userPhone"
          value={formData.userPhone}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="+91 1234567890"
        />
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <FaWhatsapp size={12} className="text-green-400" />
          You'll receive confirmation on WhatsApp
        </p>
      </div>

      <div>
        <label className="label-text flex items-center gap-2">
          <FaScissors size={14} /> Service *
        </label>
        <input
          type="text"
          name="serviceName"
          value={formData.serviceNameName}
          onChange={handleChange}
          required
          className="input-field"
          placeholder="Select a service"
          list="services-list"
        />
        <datalist id="services-list">
          <option value="Hair Cut" />
          <option value="Bridal Makeup" />
          <option value="Manicure" />
          <option value="Hydra Facial" />
        </datalist>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="label-text flex items-center gap-2">
            <FaCalendar size={14} /> Date *
          </label>
          <input
            type="date"
            name="bookingDate"
            value={formData.bookingDate}
            onChange={handleChange}
            required
            min={getMinDate()}
            max={getMaxDate()}
            className="input-field"
          />
        </div>

        <div>
          <label className="label-text flex items-center gap-2">
            <FaClock size={14} /> Time *
          </label>
          <select
            name="bookingTime"
            value={formData.bookingTime}
            onChange={handleChange}
            required
            className="input-field"
          >
            <option value="">Select time</option>
            {generateTimeSlots().map((time) => (
              <option key={time} value={time}>
                {time}
              </option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full btn-primary text-lg py-3"
      >
        {loading ? (
            <span className="flex items-center  justify-center gap-2">
                <span className="w-5 h-5 border-2 border-black-900 border-t-transparent rounded-full animate-spin" />
                Booking...
            </span>
        ) : (
            'Confirm Booking'
        )}
      </button>

      <p className="text-xs text-gold-500/60 text-center">
        By booking, you agree to receive confirmation on WhatsApp
      </p>
    </form>
  );
};

export default BookingForm;