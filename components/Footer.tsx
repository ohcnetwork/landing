"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Footer() {
  const router = useRouter();
  const path = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    // { name: 'Projects', href: '/projects' },
    { name: 'Supporters', href: '/supporters' },
    { name: 'Contact', href: '/#contact' },
  ];

  useEffect(() => {
    const handleScrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          history.replaceState(null, '', window.location.pathname);
        }
      }
    };
  
    // Immediately invoke the function once after navigation
    handleScrollToHash();
  
    // Cleanup logic: Only observe for initial change and then disconnect
    const observer = new MutationObserver(() => {
      handleScrollToHash();
      observer.disconnect(); // Disconnect after one scroll to prevent repeated triggers
    });
  
    observer.observe(document.body, { attributes: true, subtree: true });
  
    return () => observer.disconnect();
  }, [path]);
  
  

  const handleNavigation = (href: string) => {
    if (href.includes('#')) {
      const [page, section] = href.split('#');
      const targetPage = page || '/';

      if (path === targetPage) {
        document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        router.push(targetPage + '#' + section);
      }
    } else {
      router.push(href);
    }
  };

  const socialLinks = [
    {
      name: 'YouTube',
      href: 'https://www.youtube.com/@ohc.network',
      icon: 'logos/yt-logo.svg',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/ohcnetwork',
      icon: 'logos/github-logo.svg',
    },
    {
      name: 'Slack',
      href: 'https://slack.ohc.network/',
      icon: 'logos/slack-logo.svg',
    },
  ];

  return (
    <footer className="bg-primary-100 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,auto] gap-8 lg:gap-16">
          <div className="max-w-sm">
            <div className="flex items-center">
              <Image
                src="/logos/ohc/ohc-green.png"
                alt="OHC Network Logo"
                width={60}
                height={60}
                className="h-10 w-auto"
              />
              <span className="ml-3 text-primary-900 font-medium text-xl">
                Open Healthcare Network
              </span>
            </div>
            <p className="mt-4 text-primary-900 text-sm">
              OHC Network is an open-source platform using AI to revolutionize healthcare.
            </p>
          </div>

          <div className="grid grid-cols-2 md:flex md:gap-16 font-medium">
            <nav className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-primary-900 hover:text-primary-600 transition-colors text-sm"
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      handleNavigation(item.href);
                    }
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col space-y-3">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center text-primary-900 hover:text-primary-600 transition-colors text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={item.icon}
                    alt={`${item.name} icon`}
                    width={24}
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="ml-2">{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-200">
          <p className="text-center text-xs text-primary-900">
            © {new Date().getFullYear()} Open Healthcare Network. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}