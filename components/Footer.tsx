// components/Footer.tsx
import Link from 'next/link';

const LinkedInIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
    >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

const FacebookIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
    >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);

const TwitterIcon = () => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 h-5 fill-current"
    >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
);

const Footer = () => {
    return (
        <footer className="bg-[#3E3E3E] text-gray-200 p-4 sm:p-12 w-[88%] rounded-t-3xl sm:rounded-t-[3rem]">
            <div className="sm:mx-auto">
                {/* Top Navigation */}
                <nav className="flex justify-center md:justify-end space-x-6 mb-12">
                    <Link
                        href="/"
                        className="text-gray-200 hover:text-white text-sm"
                    >
                        About us
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-200 hover:text-white text-sm"
                    >
                        Services
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-200 hover:text-white text-sm"
                    >
                        Use Cases
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-200 hover:text-white text-sm"
                    >
                        Pricing
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-200 hover:text-white text-sm"
                    >
                        Blog
                    </Link>
                </nav>

                {/* Main Content */}
                <div className="grid md:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div className='flex flex-col gap-1'>
                        <span className="bg-gradient-to-b from-[#318949] to-[#22CC77] text-[#F3F3F3] text-xl px-2 py-1 font-medium mb-4 rounded-lg w-max">Contact us:</span>
                        <div className="space-y-2 text-lg">
                            <p>Email: xyz@gmail.com</p>
                            <p>Phone: 555-567-8901</p>
                            <div>
                                <p>Address: 1234 Main St</p>
                                <p>Moonstone City, Stardust State 12345</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Form */}
                    <div className="bg-[#292A32] p-6 rounded-2xl flex justify-center items-center">
                        <form className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                            <input
                                type="email"
                                placeholder="Email"
                                className="flex-1 bg-transparent border border-zinc-700 rounded-xl px-6 py-3 focus:outline-none focus:border-emerald-400"
                            />
                            <button
                                type="submit"
                                className="bg-gradient-to-b from-[#318949] to-[#22CC77] text-[#292A32] px-6 py-3 rounded-xl font-medium hover:bg-emerald-500 transition-colors"
                            >
                                Subscribe to News
                            </button>
                        </form>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-6 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-sm text-gray-400 flex flex-col md:flex-row items-center gap-4">
                        <span>© 2023 xyz. All Rights Reserved.</span>
                        <Link href="/" className="hover:text-white">
                            Privacy Policy
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className="flex items-center gap-4">
                        <Link href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white">
                            <LinkedInIcon />
                        </Link>
                        <Link href="#" aria-label="Facebook" className="text-gray-400 hover:text-white">
                            <FacebookIcon />
                        </Link>
                        <Link href="#" aria-label="Twitter" className="text-gray-400 hover:text-white">
                            <TwitterIcon />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;