import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import {
    ChevronDown,
    Menu,
    X,
    ExternalLink,
    Home,
} from "lucide-react";


const navItems = [
    {
        label: "Corporate Overview",
        submenu: [
            { label: "About Bajaj Group" },
            { label: "About Bajaj Electricals" },
            { label: "Our Businesses" },
            { label: "Chairman's Communique" },
            { label: "Financial Highlights" },
            { label: "Awards and Accolades" },
            { label: "Value Creation Model" },
            { label: "Stakeholder Engagement" },
            { label: "Materiality Assessment" },
            { label: "Risk Management" },
            { label: "ESG Score" },
            { label: "Board of Directors" },
            { label: "Senior Portfolio" },
            { label: "Consumer Products" },
            { label: "Lighting Solutions" },
            { label: "Financial Capital" },
            { label: "Manufactured Capital" },
            { label: "Intellectual Capital" },
            { label: "Human Capital" },
            { label: "Social and Relationship Capital" },
            { label: "Natural Capital" },
            { label: "Corporate Information" },
        ],
    },
    {
        label: "Statutory Reports",
        submenu: [
            { label: "Notice of the Annual General Meeting" },
            { label: "Board's Report" },
            { label: "Report on Corporate Governance" },
            { label: "Management Discussion and Analysis" },
        ],
    },
    {
        label: "Financial Statements",
        submenu: [
            { label: "Standalone", isHeading: true },
            { label: "Independent Auditor's Report" },
            { label: "Standalone Financial Statements" },
            { label: "Consolidated", isHeading: true },
            { label: "Independent Auditor's Report" },
            { label: "Consolidated Financial Statements" },
        ],
    },
];

export default function Navbar() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);
    const [openAccordions, setOpenAccordions] = useState([]);
    const dropdownRef = useRef();

    // currentPath is mocked here, in a real app, you might use useLocation from react-router-dom
    const currentPath = "/";

    const getPathFromItem = (item) =>
        "/" +
        item
            .toLowerCase()
            .replace(/[\s&:]+/g, "_")
            .replace(/[^\w_]/g, "");

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActiveSubmenu(null);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleAccordion = (index) => {
        setOpenAccordions((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    const handleSubmenuToggle = (index) => {
        setActiveSubmenu(activeSubmenu === index ? null : index);
    };

    const navigate = useNavigate();

    const handleNavigation = (path) => {
        console.log("Navigating to:", path);
        navigate(path); // This is where the navigation actually happens
        setMobileOpen(false); // Close mobile menu on navigation
        setActiveSubmenu(null); // Close desktop submenu on navigation
    };


    const renderSubmenuContent = (submenu) =>
        submenu.map((subItem, subIndex) => {
            if (subItem.isHeading) {
                return (
                    <div
                        key={subIndex}
                        className="px-4 py-3 text-xs font-bold uppercase tracking-wider border-b border-gray-200 bg-gradient-to-r from-blue-50 to-transparent"
                        style={{ color: '#155cac' }}
                    >
                        {subItem.label}
                    </div>
                );
            }
            return (
                <button
                    key={subIndex}
                    onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                    className="w-full px-4 py-3 text-sm text-left transition-all duration-200 hover:bg-blue-50 text-gray-700 border-b border-gray-100 last:border-b-0"
                    style={{
                        // Inline style for hover might not work as expected with utility classes
                        // Consider using a CSS module or Tailwind's arbitrary variants if needed for complex hover states
                        // For simple color changes, onMouseEnter/Leave is fine or define a custom utility class
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#155cac'}
                    onMouseLeave={(e) => e.target.style.color = '#374151'}
                >
                    {subItem.label}
                </button>
            );
        });

    return (
        <>
            <nav className="fixed top-0 w-full z-50">
                <div className="bg-white shadow-lg border-b border-gray-200">
                    <div className="w-[90%] mx-auto">
                        <div className="flex items-center justify-between h-16">
                            <button
                                onClick={() => handleNavigation("/")}
                                className="flex items-center"
                            >
                                <img src="//www.bajajelectricals.com/cdn/shop/files/simply-otp-login-banner.png?v=1722601845&amp;width=220" alt="" className="w-25" />
                            </button>

                            <div className="hidden lg:flex items-center space-x-1" ref={dropdownRef}>
                                {navItems.map((item, index) => (
                                    <div key={index} className="relative">
                                        <button
                                            onClick={() => handleSubmenuToggle(index)}
                                            onMouseEnter={() => setActiveSubmenu(index)}
                                            className={`flex items-center px-4 py-4 text-sm font-medium transition-all duration-200 border-b-3 ${activeSubmenu === index
                                                ? "bg-blue-50"
                                                : "text-gray-700 border-transparent hover:bg-blue-50"
                                                }`}
                                            style={{
                                                color: activeSubmenu === index ? '#155cac' : '',
                                                borderBottomColor: activeSubmenu === index ? '#155cac' : 'transparent'
                                            }}
                                            onMouseOver={(e) => {
                                                if (activeSubmenu !== index) {
                                                    e.target.style.color = '#155cac';
                                                }
                                            }}
                                            onMouseOut={(e) => {
                                                if (activeSubmenu !== index) {
                                                    e.target.style.color = '#374151';
                                                }
                                            }}
                                        >
                                            {item.label}
                                            <ChevronDown
                                                className={`ml-1 h-4 w-4 transition-transform duration-200 ${activeSubmenu === index ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        {activeSubmenu === index && (
                                            <div
                                                onMouseEnter={() => setActiveSubmenu(index)}
                                                onMouseLeave={() => setActiveSubmenu(null)}
                                                className="absolute top-full left-0 mt-0 bg-white shadow-xl border border-gray-200 z-50 overflow-hidden"
                                                style={{
                                                    width: item.label === "Corporate Overview" ? "800px" : "450px"
                                                }}
                                            >
                                                {/* Corporate Overview - 3 columns */}
                                                {item.label === "Corporate Overview" && (
                                                    <div className="grid grid-cols-3 gap-0">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <button
                                                                key={subIndex}
                                                                onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                className="text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-50 text-gray-700 border-b border-r border-gray-100 last:border-b-0"
                                                                onMouseEnter={(e) => e.target.style.color = '#155cac'}
                                                                onMouseLeave={(e) => e.target.style.color = '#374151'}
                                                            >
                                                                {subItem.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}

                                                {/* Financial Statements - Special Layout */}
                                                {item.label === "Financial Statements" && (
                                                    <div className="py-2">
                                                        {/* Standalone Section */}
                                                        <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider border-b border-gray-200 bg-blue-50" style={{ color: '#155cac' }}>
                                                            Standalone
                                                        </div>
                                                        {item.submenu
                                                            .filter((_, i) => i >= 1 && i <= 2) // Adjust filter based on actual structure if needed
                                                            .map((subItem, subIndex) => (
                                                                <button
                                                                    key={subIndex}
                                                                    onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                    className="w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-50 text-gray-700 border-b border-gray-100"
                                                                    onMouseEnter={(e) => e.target.style.color = '#155cac'}
                                                                    onMouseLeave={(e) => e.target.style.color = '#374151'}
                                                                >
                                                                    {subItem.label}
                                                                </button>
                                                            ))}

                                                        {/* Consolidated Section */}
                                                        <div className="px-4 py-3 text-xs font-bold uppercase tracking-wider border-b border-gray-200 bg-blue-50 mt-2" style={{ color: '#155cac' }}>
                                                            Consolidated
                                                        </div>
                                                        {item.submenu
                                                            .filter((_, i) => i >= 4) // Adjust filter based on actual structure if needed
                                                            .map((subItem, subIndex) => (
                                                                <button
                                                                    key={subIndex}
                                                                    onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                    className="w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-50 text-gray-700 border-b border-gray-100 last:border-b-0"
                                                                    onMouseEnter={(e) => e.target.style.color = '#155cac'}
                                                                    onMouseLeave={(e) => e.target.style.color = '#374151'}
                                                                >
                                                                    {subItem.label}
                                                                </button>
                                                            ))}
                                                    </div>
                                                )}

                                                {/* Statutory Reports */}
                                                {item.label === "Statutory Reports" && (
                                                    <div className="py-2">
                                                        {item.submenu.map((subItem, subIndex) => (
                                                            <button
                                                                key={subIndex}
                                                                onClick={() => handleNavigation(getPathFromItem(subItem.label))}
                                                                className="w-full text-left px-4 py-3 text-sm transition-all duration-200 hover:bg-blue-50 text-gray-700 border-b border-gray-100 last:border-b-0"
                                                                onMouseEnter={(e) => e.target.style.color = '#155cac'}
                                                                onMouseLeave={(e) => e.target.style.color = '#374151'}
                                                            >
                                                                {subItem.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="hidden lg:flex items-center space-x-6">
                                <button
                                    className="inline-flex items-center px-6 py-2 text-sm font-medium text-white transition-all duration-200 shadow-lg hover:shadow-xl"
                                    style={{
                                        backgroundColor: '#155cac'
                                    }}
                                    onMouseEnter={(e) => e.target.style.backgroundColor = '#0f4287'}
                                    onMouseLeave={(e) => e.target.style.backgroundColor = '#155cac'}
                                >
                                    Annual Report 2023-24
                                    <ExternalLink className="ml-2 h-4 w-4" />
                                </button>
                            </div>

                            <div className="lg:hidden">
                                <button
                                    onClick={() => setMobileOpen(!mobileOpen)}
                                    className="inline-flex items-center justify-center p-2 text-gray-700 hover:bg-blue-50 transition-all duration-200"
                                    onMouseEnter={(e) => e.target.style.color = '#155cac'}
                                    onMouseLeave={(e) => e.target.style.color = '#374151'}
                                >
                                    {mobileOpen ? (
                                        <X className="h-6 w-6" />
                                    ) : (
                                        <Menu className="h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile navigation */}
            {mobileOpen && (
                <div className="lg:hidden fixed w-full z-30 top-16">
                    <div className="bg-white shadow-lg border-b border-gray-200">
                        <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
                            {/* Mobile Annual Report */}
                            <button
                                className="flex items-center justify-center w-full px-4 py-3 text-sm font-medium text-white transition-all duration-200 mb-4 shadow-lg"
                                style={{ backgroundColor: '#155cac' }}
                                onMouseEnter={(e) => e.target.style.backgroundColor = '#0f4287'}
                                onMouseLeave={(e) => e.target.style.backgroundColor = '#155cac'}
                            >
                                Annual Report 2023-24
                                <ExternalLink className="ml-2 h-4 w-4" />
                            </button>

                            {/* Mobile Home */}
                            <button
                                onClick={() => handleNavigation('/')}
                                className="w-full flex items-center px-4 py-3 text-left transition-all duration-200 text-gray-700 hover:bg-blue-50"
                                onMouseEnter={(e) => e.target.style.color = '#155cac'}
                                onMouseLeave={(e) => e.target.style.color = '#374151'}
                            >
                                <Home className="mr-3 h-4 w-4" />
                                <span className="text-sm font-medium">Home</span>
                            </button>

                            {/* Mobile Navigation Items */}
                            {navItems.map((item, index) => (
                                <div key={index} className="border-b border-gray-200 last:border-b-0">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-all duration-200"
                                    >
                                        <span className="text-sm font-medium">{item.label}</span>
                                        <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${openAccordions.includes(index) ? 'rotate-180' : ''
                                            }`} />
                                    </button>

                                    {openAccordions.includes(index) && (
                                        <div className="bg-blue-50 mt-1 mb-2 overflow-hidden">
                                            {renderSubmenuContent(item.submenu)}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Mobile Menu Overlay */}
            {mobileOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-black/20 z-20"
                    onClick={() => setMobileOpen(false)}
                />
            )}
        </>
    );
}