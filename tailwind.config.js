/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        'primary': '#1B365D', // Navy blue for legal authority - blue-900
        'secondary': '#2C5282', // Supporting blue for hierarchy - blue-700
        'accent': '#C9A961', // Gold for premium positioning - yellow-600
        
        // Background Colors
        'background': '#FFFFFF', // Clean white for credibility - white
        'surface': '#F7FAFC', // Subtle gray for separation - gray-50
        
        // Text Colors
        'text-primary': '#1A202C', // High contrast for scanning - gray-900
        'text-secondary': '#4A5568', // Supporting text - gray-600
        
        // Status Colors
        'success': '#38A169', // Green for positive metrics - green-500
        'warning': '#D69E2E', // Gold-orange for urgency - yellow-500
        'error': '#E53E3E', // Red for form validation - red-500
        
        // Border Colors
        'border': '#E2E8F0', // Form fields and dividers - gray-200
        'border-accent': '#C9A961', // CTA button borders - yellow-600
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'accent': ['Crimson Text', 'serif'],
      },
      fontWeight: {
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      boxShadow: {
        'cta': '0 4px 6px -1px rgba(0, 0, 0, 0.1)', // CTA button elevation
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1)', // Testimonial cards
        'nav': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)', // Navigation shadow
      },
      transitionDuration: {
        '250': '250ms',
      },
      transitionTimingFunction: {
        'ease-in-out': 'ease-in-out',
      },
      zIndex: {
        '100': '100', // Navigation layer
        '150': '150', // Progress indicator
        '200': '200', // CTA button
        '1000': '1000', // Exit-intent modal
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      backdropBlur: {
        'nav': '8px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}