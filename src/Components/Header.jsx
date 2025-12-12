'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {
    Search,
    Heart,
    ShoppingBag,
    User,
    ChevronDown,
    Menu,
    X,
} from 'lucide-react';
import LogoImg from '../assets/Logo.png';

const Header = () => {
    const router = useRouter();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const navLinks = [
        { label: 'SHOP', href: '/shop' },
        { label: 'SKILLS', href: '/skills' },
        { label: 'STORIES', href: '/stories' },
        { label: 'ABOUT', href: '/about' },
        { label: 'CONTACT US', href: '/contact' },
    ];

    const handleDrawerToggle = (open) => {
        setDrawerOpen(open);
    };

    useEffect(() => {
        document.body.style.overflow = drawerOpen ? 'hidden' : '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [drawerOpen]);

    console.log("Render: drawerOpen = ", drawerOpen);


    return (
        <header className="main-header">
            <div className="top-promo-bar">
                <span>🧧 Promo 1</span>
                <span>🧧 Promo 2</span>
                <span>🧧 Promo 3</span>
            </div>

            <div className="header-center">
                <div className="hamburger-img-logo">
                    <button
                        className="hamburger"
                        onClick={() => {
                            setDrawerOpen(true);
                        }}
                        style={{ zIndex: 9999, position: 'relative' }}
                    >
                        <Menu size={22} />
                    </button>

                    <div className="header-logo-icon" onClick={() => router.push('/')}>
                        <Image src={LogoImg} alt="Logo" width={34} height={34} />
                    </div>
                </div>

                <div className="header-center-logo" onClick={() => router.push('/')}>
                    LOGO
                </div>

                <div className="header-icons">
                    <Search className="header-icon" onClick={() => router.push('/search')} size={18} />
                    <Heart className="header-icon" onClick={() => router.push('/wishlist')} size={18} />
                    <ShoppingBag className="header-icon" onClick={() => router.push('/cart')} size={18} />
                    <User className="header-icon hide" onClick={() => router.push('/account')} size={18} />
                    <div className="lang-select hide">
                        <span>ENG</span> <ChevronDown size={14} />
                    </div>
                </div>
            </div>

            <nav className="nav-menu">
                {navLinks.map((link) => (
                    <button key={link.href} onClick={() => router.push(link.href)}>
                        {link.label}
                    </button>
                ))}
            </nav>
            
            <div className={`mobile-drawer ${drawerOpen ? 'open' : ''}`}>
                <div className="mobile-drawer-header">
                    <X size={22} onClick={() => handleDrawerToggle(false)} />
                </div>
                <div className="mobile-drawer-links">
                    {navLinks.map((link) => (
                        <button
                            key={link.href}
                            onClick={() => {
                                handleDrawerToggle(false);
                                router.push(link.href);
                            }}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
