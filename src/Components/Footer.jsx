const Footer = () => {
    return (
        <footer className="text-[#013367] bg-blue-200">
            <div className=" marginal">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">

                    {/* Company Logo */}
                    <div className="flex items-center">
                        <a href="https://www.kotak.com/en/home.html" target="_blank" className="text-xl font-bold w-32">
                            <img src="//www.bajajelectricals.com/cdn/shop/files/simply-otp-login-banner.png?v=1722601845&amp;width=220" alt="Logo" />
                        </a>
                    </div>

                    {/* Copyright Statement */}
                    <div className="text-md text-black    ">
                        © {new Date().getFullYear()}  Bajaj Electrical India.
                    </div>

                    <div className="flex items-center space-x-2 text-md text-black">
                        <span>Website by</span>
                        <a
                            href="https://kalolwala.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center space-x-1 hover:text-neutral-700 transition-colors duration-200"
                        >
                            <img
                                src="/k&a logo.webp"
                                alt="K&A Developer Logo"
                                className="w-4 h-4 object-contain"
                            />
                            <span>Kalolwala & Associates</span>
                        </a>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;