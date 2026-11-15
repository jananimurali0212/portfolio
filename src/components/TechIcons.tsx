import React from 'react';
import { TechIconId } from '../types/portfolio';

interface TechIconProps {
  id: TechIconId;
  className?: string;
}

export const TechIcon: React.FC<TechIconProps> = ({ id, className = 'w-6 h-6' }) => {
  switch (id) {
    case 'python':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M11.9 2C7.8 2 8.1 3.8 8.1 3.8v1.9h3.9v.6H6.5S4 6 4 10c0 4 2.2 3.9 2.2 3.9h1.3v-1.9s-.1-2.2 2.2-2.2h3.8s2.1 0 2.1-2V4.1S16 2 11.9 2Zm-2.1 1.2a.7.7 0 1 1 0 1.4.7.7 0 0 1 0-1.4Z"
            fill="#2563EB"
          />
          <path
            d="M12.1 22c4.1 0 3.8-1.8 3.8-1.8v-1.9H12v-.6h5.5s2.5.3 2.5-3.7c0-4-2.2-3.9-2.2-3.9h-1.3V12s.1 2.2-2.2 2.2h-3.8s-2.1 0-2.1 2v3.7S8 22 12.1 22Zm2.1-1.2a.7.7 0 1 1 0-1.4.7.7 0 0 1 0-1.4Z"
            fill="#0D9488"
          />
        </svg>
      );
    case 'java':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M9.5 17.5s-1 .6.7.8c2 .2 3 .2 5.2-.2 0 0 .6.4 1.4.7-4.9 2.1-11.2-.1-7.3-1.3Zm-.6-2.5s-1.1.8.6 1c2.2.2 3.9.2 6.8-.3 0 0 .4.4 1 .6-5.9 1.7-12.4.1-8.4-1.3Z"
            fill="#2563EB"
          />
          <path
            d="M13.3 11.2c1.2 1.4-.3 2.7-.3 2.7s3.1-1.6 1.7-3.6c-1.3-1.9-2.3-2.8 3.1-6 0 0-8.6 2.1-4.5 6.9Z"
            fill="#EA580C"
          />
          <path
            d="M18.6 19.6s.7.6-.8 1c-2.9.9-12 1.1-14.5 0-.9-.4.8-.9 1.3-1 .6-.1.9-.1.9-.1-1-.7-6.6 1.4-2.8 2 10.2 1.7 18.6-.7 15.9-1.9ZM9.9 12.3s-4.7 1.1-1.7 1.5c1.3.2 3.9.1 6.3-.1 2-.2 4-.5 4-.5s-.7.3-1.2.6c-4.9 1.3-14.3.7-11.6-.6 2.3-1.1 4.2-.9 4.2-.9Z"
            fill="#2563EB"
          />
          <path
            d="M13.9 2s2.2 2.2-2.1 5.6c-3.4 2.7-.8 4.2 0 6-2-1.8-3.5-3.4-2.5-4.9 1.4-2.1 5.4-3.2 4.6-6.7Z"
            fill="#EA580C"
          />
        </svg>
      );
    case 'cpp':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Z"
            stroke="#2563EB"
            strokeWidth="1.75"
            fill="#EFF6FF"
          />
          <path
            d="M11.6 14.5a3.2 3.2 0 1 1 0-5"
            stroke="#0F172A"
            strokeWidth="1.9"
            strokeLinecap="round"
          />
          <path
            d="M13.5 12h3M15 10.5v3M17.5 12h2M18.5 11v2"
            stroke="#0D9488"
            strokeWidth="1.7"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'c':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Z"
            stroke="#0D9488"
            strokeWidth="1.75"
            fill="#F0FDFA"
          />
          <path
            d="M14.8 14.8a3.8 3.8 0 1 1 0-5.6"
            stroke="#0F172A"
            strokeWidth="2.1"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'react':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="2.1" fill="#0D9488" />
          <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#0D9488" strokeWidth="1.6" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(60 12 12)"
            stroke="#2563EB"
            strokeWidth="1.6"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.5"
            ry="3.8"
            transform="rotate(120 12 12)"
            stroke="#0284C7"
            strokeWidth="1.6"
          />
        </svg>
      );
    case 'javascript':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="3.5"
            fill="#FEF3C7"
            stroke="#D97706"
            strokeWidth="1.6"
          />
          <path
            d="M10.5 10.5v5.1c0 1.2-.7 1.8-1.8 1.8-.7 0-1.3-.3-1.7-.9M17.2 11.4c-.4-.6-1-.9-1.7-.9-1 0-1.6.5-1.6 1.2 0 .9.7 1.2 1.7 1.6 1.2.4 2 .9 2 2.2 0 1.3-1 2-2.4 2-1.1 0-2-.4-2.5-1.2"
            stroke="#92400E"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'html':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3Z"
            fill="#FFEDD5"
            stroke="#EA580C"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M15.8 7.5H8.3l.3 3.8h6.8l-.4 4.4-3 .9-3-.9-.2-2.1"
            stroke="#9A3412"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'css':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M4 3h16l-1.5 16.2L12 21l-6.5-1.8L4 3Z"
            fill="#EFF6FF"
            stroke="#2563EB"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
          <path
            d="M8 7.5h8l-.4 3.8H9.2m-.2 0h6.3l-.4 4.3-2.9.9-2.9-.9-.2-2"
            stroke="#1D4ED8"
            strokeWidth="1.65"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'git':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect
            x="12"
            y="2.5"
            width="13.4"
            height="13.4"
            rx="2.4"
            transform="rotate(45 12 2.5)"
            fill="#FEF2F2"
            stroke="#DC2626"
            strokeWidth="1.6"
          />
          <circle cx="12" cy="8.5" r="1.4" fill="#991B1B" />
          <circle cx="12" cy="15.5" r="1.4" fill="#991B1B" />
          <circle cx="15.5" cy="12" r="1.4" fill="#991B1B" />
          <path
            d="M12 9.9v4.2M12.9 9.4l1.7 1.7"
            stroke="#991B1B"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'github':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12 2C6.475 2 2 6.475 2 12a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.475 0-.238-.012-1.025-.012-1.863-2.513.463-3.163-.612-3.363-1.175-.112-.288-.6-1.175-1.025-1.413-.35-.187-.85-.65-.012-.662.787-.013 1.35.725 1.537 1.025.9 1.512 2.338 1.087 2.913.825.087-.65.35-1.088.637-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.988 1.025-2.688-.1-.25-.45-1.275.1-2.65 0 0 .837-.262 2.75 1.025a9.28 9.28 0 0 1 2.5-.337c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.025 2.75-1.025.55 1.375.2 2.4.1 2.65.637.7 1.025 1.588 1.025 2.688 0 3.837-2.338 4.687-4.563 4.937.363.313.675.913.675 1.85 0 1.338-.012 2.413-.012 2.75 0 .262.187.575.687.475A10.005 10.005 0 0 0 22 12c0-5.525-4.475-10-10-10Z"
          />
        </svg>
      );
    case 'vscode':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M17.5 3.5 8.2 12l9.3 8.5 3-1.4V4.9l-3-1.4Z"
            fill="#EFF6FF"
            stroke="#2563EB"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          <path
            d="m4.2 8.2 3.8 3.8-3.8 3.8L3 14.6l2.6-2.6L3 9.4l1.2-1.2Zm13.3-4.7-9.3 8.5M8.2 12l9.3 8.5"
            stroke="#1D4ED8"
            strokeWidth="1.55"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'ai':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="3" stroke="#2563EB" strokeWidth="1.7" fill="#EFF6FF" />
          <circle cx="5" cy="7" r="1.7" fill="#0D9488" />
          <circle cx="19" cy="7" r="1.7" fill="#2563EB" />
          <circle cx="5" cy="17" r="1.7" fill="#2563EB" />
          <circle cx="19" cy="17" r="1.7" fill="#0D9488" />
          <path
            d="m6.5 8.1 3.1 2.2m7.9-2.2-3.1 2.2m-7.9 5.6 3.1-2.2m7.9 2.2-3.1-2.2M12 4.5V9m0 6v4.5"
            stroke="#334155"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case 'rag':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect x="3" y="4" width="8" height="10" rx="1.8" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.6" />
          <path d="M5.5 7.5h3M5.5 10.5h3" stroke="#2563EB" strokeWidth="1.4" strokeLinecap="round" />
          <circle cx="17" cy="15" r="3.5" fill="#F0FDFA" stroke="#0D9488" strokeWidth="1.6" />
          <path d="m19.5 17.5 2 2" stroke="#0D9488" strokeWidth="1.6" strokeLinecap="round" />
          <path d="M11 9h4.5c1 0 1.5.6 1.5 1.5v1" stroke="#334155" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'api':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M8 7 4 12l4 5M16 7l4 5-4 5M13.5 5.5l-3 13"
            stroke="#0D9488"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'database':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <ellipse cx="12" cy="6" rx="7.5" ry="2.8" fill="#EFF6FF" stroke="#2563EB" strokeWidth="1.6" />
          <path
            d="M4.5 6v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8V6"
            stroke="#2563EB"
            strokeWidth="1.6"
          />
          <path
            d="M4.5 12v6c0 1.55 3.36 2.8 7.5 2.8s7.5-1.25 7.5-2.8v-6"
            stroke="#0D9488"
            strokeWidth="1.6"
          />
        </svg>
      );
    case 'cloud':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <path
            d="M7.5 18.5h9.2a4.3 4.3 0 0 0 .8-8.52A5.5 5.5 0 0 0 6.9 8.7 4.5 4.5 0 0 0 7.5 18.5Z"
            fill="#EFF6FF"
            stroke="#2563EB"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case 'testing':
      return (
        <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden="true">
          <rect x="4" y="4" width="16" height="16" rx="3" fill="#F0FDFA" stroke="#0D9488" strokeWidth="1.6" />
          <path
            d="m8.5 12.2 2.3 2.3 4.8-5"
            stroke="#0F766E"
            strokeWidth="1.9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
};
