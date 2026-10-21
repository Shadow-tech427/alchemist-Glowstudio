import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaUser, FaCalendarCheck, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../hooks/useAuth";
import logo from '../assets/NailAlchemist.png-removebg-preview.png';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    const navLinks = [
        { path: '/', label: 'Home' },
        { path: '/booking', label: 'Book Now' },
    ];

    const handleLogout = () => {
        logout();
        navigate('/');
        setIsOpen(false);
    };

    return (
        <header className="bg-black-900 border-b border-gold-500/20 sticky top-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src={logo} alt="Alchemist Glow Studio Logo" className="h-10 w-10 object-contain" />
                        <span className="text-2xl font-playfair gold-text font-bold">
                            Alchemist Glow Studio
                        </span>
                        <span className="text-gold-400 text-sm hidden md:inline"></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-gray-300 hover:text-gold-400 transition-colors font-inter"
                            >
                                {link.label}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Auth Buttons */}
                    <div className="hidden md:flex items-center space-x-4">
                        {user ? (
                            <>
                                <Link
                                    to="/dashboard"
                                    className="flex items-center gap-2 px-4 py-2 text-gold-400 border border-500/30 rounded-lg hover:bg-gold-500/10 transition-all"
                                >
                                    <FaUser />
                                    Dashboard
                                </Link>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-2 px-4 py-2 text-red-400 border border-red-500/30 rounded-lg hover:bg-red-500/10 transition-all"
                                >
                                    <FaSignOutAlt />
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link 
                                    to="/admin-login"
                                    className="flex items-center gap-2 px-4 py-2 text-gold-400 border border-gold-500/30 rounded-lg hover:bg-gold-500/10 transition-all"
                                >
                                    <FaUser />
                                    Admin Login
                                </Link>
                                <Link 
                                    to="/booking"
                                    className="flex items-center gap-2 px-4 py-2 text-gold-400 border border-gold-500/30 rounded-lg hover:bg-gold-500/10 transition-all"
                                >
                                    <FaCalendarCheck />
                                    Book Now
                                </Link>
                            </>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gold-400 text-2xl"
                    >
                        {isOpen ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden py-4 border-t border-gold-500/20">
                        <nav className="flex flex-col space-y-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className="text-gray-300 hover:text-gold-400 transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex flex-col space-y-2 pt-2 border-t border-gold-500/20">
                                {user ? (
                                    <>
                                        <Link
                                            to="/dashboard"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-gold-400 border border-gold-500/30 rounded-lg"
                                        >
                                            <FaUser /> Dashboard
                                        </Link>
                                        <button
                                            onClick={handleLogout}
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-red-400 border border-red-500/30 rounded-lg"
                                        >
                                            <FaSignOutAlt /> Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link
                                            to="/admin-login"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-gold-400 border border-gold-500/30 rounded-lg"
                                        >
                                            <FaUser /> Admin Login
                                        </Link>
                                        <Link
                                            to="/booking"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-center gap-2 px-4 py-2 text-gold-400 border border-gold-500/30 rounded-lg"
                                        >
                                            <FaCalendarCheck /> Book Now
                                        </Link>
                                    </>
                                )}
                            </div>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;