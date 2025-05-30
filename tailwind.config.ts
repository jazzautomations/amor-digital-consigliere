import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Cyberpunk theme colors
				cyber: {
					black: '#000000',
					'light-gray': '#D3D3D3',
					'neon-red': '#FF3E4E',
					'neon-cyan': '#00E1FF'
				},
				// Keeping existing brand colors
				brand: {
					purple: '#9b87f5',
					'purple-dark': '#7E69AB',
					'purple-light': '#D6BCFA',
					dark: '#1A1F2C',
					gray: '#8E9196',
					'soft-purple': '#E5DEFF',
					'soft-gray': '#F1F0FB',
					blue: '#1EAEDB',
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'pulse-glow': {
					'0%, 100%': { 
						opacity: '1',
						boxShadow: '0 0 10px 2px rgba(155, 135, 245, 0.7)'
					},
					'50%': { 
						opacity: '0.8',
						boxShadow: '0 0 20px 4px rgba(155, 135, 245, 0.9)'
					},
				},
				'neon-pulse': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #FF3E4E, 0 0 15px #FF3E4E'
					},
					'50%': { 
						boxShadow: '0 0 20px #FF3E4E, 0 0 30px #FF3E4E'
					},
				},
				'neon-pulse-cyan': {
					'0%, 100%': { 
						boxShadow: '0 0 5px #00E1FF, 0 0 15px #00E1FF'
					},
					'50%': { 
						boxShadow: '0 0 20px #00E1FF, 0 0 30px #00E1FF'
					},
				},
				'halo-rotate': {
					'0%': { 
						transform: 'rotate(0deg)' 
					},
					'100%': { 
						transform: 'rotate(360deg)' 
					}
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'neon-pulse': 'neon-pulse 2s ease-in-out infinite',
				'neon-pulse-cyan': 'neon-pulse-cyan 2s ease-in-out infinite',
				'halo-rotate': 'halo-rotate 15s linear infinite',
			},
			fontFamily: {
				'orbitron': ['Orbitron', 'sans-serif'],
				'exo': ['Exo 2', 'sans-serif'],
				'inter': ['Inter', 'sans-serif'],
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
