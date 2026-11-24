'use client';

import React from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Icon from '@/components/ui/AppIcon';
import { localeFromPath, localizePath } from '@/i18n/config';

const TEXT = {
    en: { title: 'Page Not Found', body: "The page you're looking for doesn't exist. Let's get you back!", back: 'Go Back', home: 'Back to Home' },
    ta: { title: 'பக்கம் கிடைக்கவில்லை', body: 'நீங்கள் தேடும் பக்கம் இல்லை. உங்களை மீண்டும் வழிநடத்துகிறோம்!', back: 'பின்செல்ல', home: 'முகப்புக்குச் செல்ல' },
    hi: { title: 'पेज नहीं मिला', body: 'आप जो पेज ढूँढ रहे हैं वह मौजूद नहीं है। चलिए आपको वापस ले चलते हैं!', back: 'वापस जाएँ', home: 'होम पर जाएँ' },
};

export default function NotFound() {
    const router = useRouter();
    const locale = localeFromPath(usePathname() || '/');
    const x = TEXT[locale];

    const handleGoHome = () => {
        router?.push(localizePath('/', locale));
    };

    const handleGoBack = () => {
        if (typeof window !== 'undefined') {
            window.history?.back();
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4">
            <div className="text-center max-w-md">
                <div className="flex justify-center mb-6">
                    <div className="relative">
                        <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
                    </div>
                </div>

                <h2 className="text-2xl font-medium text-onBackground mb-2">{x.title}</h2>
                <p className="text-onBackground/70 mb-8">
                    {x.body}
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={handleGoBack}
                        className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors duration-200"
                    >
                        <Icon name="ArrowLeftIcon" size={16} />
                        {x.back}
                    </button>

                    <button
                        onClick={handleGoHome}
                        className="inline-flex items-center justify-center gap-2 border border-border bg-background text-foreground px-6 py-3 rounded-lg font-medium hover:bg-accent hover:text-accent-foreground transition-colors duration-200"
                    >
                        <Icon name="HomeIcon" size={16} />
                        {x.home}
                    </button>
                </div>
            </div>
        </div>
    );
}