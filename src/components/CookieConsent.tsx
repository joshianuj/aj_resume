import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, ExternalLink } from 'lucide-react';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            const timer = setTimeout(() => setIsVisible(true), 2000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleConsent = (type: 'all' | 'essential' | 'none') => {
        localStorage.setItem('cookie-consent', type);

        // GTM Consent Mode Integration
        if (typeof window !== 'undefined' && (window as any).dataLayer) {
            (window as any).dataLayer.push({
                event: 'consent_update',
                consent_type: type
            });

            if (type === 'all') {
                (window as any).gtag?.('consent', 'update', {
                    'ad_storage': 'granted',
                    'analytics_storage': 'granted',
                    'personalization_storage': 'granted'
                });
            }
        }

        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:w-[420px] z-[60]"
                >
                    <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-[0_8px_30px_rgb(0,0,0,0.12)] backdrop-blur-sm bg-white/95">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-xl flex items-center justify-center">
                                <Cookie className="text-blue-600" size={20} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="text-gray-900 font-bold text-base">Cookie Settings</h3>
                                    <button
                                        onClick={() => setIsVisible(false)}
                                        className="text-gray-400 hover:text-gray-600 transition-colors"
                                    >
                                        <X size={18} />
                                    </button>
                                </div>
                                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                                    We use cookies to enhance your experience and analyze site traffic.
                                    By clicking "Accept All", you consent to our use of cookies.
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    <button
                                        onClick={() => handleConsent('all')}
                                        className="flex-1 bg-gray-900 text-white text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg hover:bg-blue-600 transition-all duration-300 transform active:scale-95"
                                    >
                                        Accept All
                                    </button>
                                    <button
                                        onClick={() => handleConsent('essential')}
                                        className="bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider py-2.5 px-4 rounded-lg hover:bg-gray-200 transition-all duration-300"
                                    >
                                        Essential Only
                                    </button>
                                </div>

                                <div className="mt-4 pt-4 border-t border-gray-50 flex items-center justify-between">
                                    <a href="#" className="text-[11px] text-gray-400 hover:text-blue-600 flex items-center gap-1 transition-colors uppercase font-bold tracking-tight">
                                        Privacy Policy
                                        <ExternalLink size={10} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
