import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Lock, Eye, Globe } from 'lucide-react';

export const PrivacyPolicyModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70] flex items-center justify-center p-4"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl max-h-[80vh] bg-white rounded-3xl shadow-2xl z-[80] overflow-hidden flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50/50">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-600 rounded-xl text-white">
                                    <Shield size={24} />
                                </div>
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900">Privacy Policy</h2>
                                    <p className="text-xs text-gray-500 font-sans uppercase tracking-wider font-bold">Effective Date: January 10, 2026</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-8 space-y-8 font-sans">
                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest">
                                    <Eye size={16} />
                                    <span>Data Collection</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    We value your privacy. This website uses Google Tag Manager (GTM) to analyze site traffic and improve user experience. GTM may collect anonymized data such as page views, time spent on site, and browser type.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest">
                                    <Lock size={16} />
                                    <span>Cookie Usage</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    We use cookies to remember your consent preferences and to support analytics. Essential cookies are necessary for the site to function, while analytical cookies help us understand how you interact with the content.
                                </p>
                            </section>

                            <section className="space-y-4">
                                <div className="flex items-center gap-2 text-blue-600 font-bold uppercase text-xs tracking-widest">
                                    <Globe size={16} />
                                    <span>Your Rights</span>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-sm">
                                    As per GDPR and international regulations, you have the right to:
                                </p>
                                <ul className="list-disc list-inside text-sm text-gray-600 space-y-2 ml-2">
                                    <li>Withdraw your consent at any time.</li>
                                    <li>Access information about the data we process.</li>
                                    <li>Request deletion of any data collected via cookies.</li>
                                </ul>
                            </section>

                            <section className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100/50">
                                <h4 className="text-blue-900 font-bold text-sm mb-2">Contact Information</h4>
                                <p className="text-blue-800/80 text-sm leading-relaxed">
                                    If you have any questions about this Privacy Policy, please contact us at <a href="mailto:joshi.anujo7@gmail.com" className="font-bold underline decoration-2 underline-offset-4">joshi.anujo7@gmail.com</a>.
                                </p>
                            </section>
                        </div>

                        {/* Footer */}
                        <div className="p-6 bg-gray-50 border-t border-gray-100 flex justify-end">
                            <button
                                onClick={onClose}
                                className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-gray-200"
                            >
                                Got it
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};
