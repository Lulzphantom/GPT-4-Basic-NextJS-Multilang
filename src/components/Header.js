import Link from 'next/link';
import { useTranslation } from 'next-i18next';

const Header = () => {
    const { t } = useTranslation('common');

    return (
        <header className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-500 text-white py-4 px-6">
            <nav className="flex items-center justify-between">
                <Link className="text-2xl font-bold" href="/">
                    Web3 Futuristic
                </Link>
                <div className="space-x-4">
                    <Link className="text-lg font-semibold" href="/">
                        {t('home')}
                    </Link>
                    <Link className="text-lg font-semibold" href="/about">
                        {t('about')}
                    </Link>
                </div>
            </nav>
        </header>
    );
};

export default Header;