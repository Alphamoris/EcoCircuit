# EcoCircuit - E-Waste Management Platform

![EcoCircuit Logo](/public/logo.png)

EcoCircuit is a modern, responsive web application designed to revolutionize e-waste management through AI-powered recycling solutions. The platform connects users with sustainable e-waste disposal services, rewards environmentally conscious behavior, and provides detailed impact tracking.

## 🌱 Features

- **AI-Powered Sorting**: Advanced algorithms categorize e-waste for optimal recycling
- **Secure Data Wiping**: Military-grade data destruction for your privacy
- **Rewards Program**: Earn Green Points for every recycled device
- **Impact Tracking**: Monitor your environmental contribution
- **Responsive Design**: Fully optimized for all devices (mobile, tablet, desktop)
- **Interactive UI**: Beautiful animations and transitions powered by Framer Motion
- **Collection Scheduling**: Easy booking system for e-waste pickup

## 📱 Responsive Design

EcoCircuit is built with a mobile-first approach, ensuring a seamless experience across all devices:

- **Mobile**: Optimized layouts and touch-friendly interfaces
- **Tablet**: Adaptive grid systems and properly scaled components
- **Desktop**: Enhanced experiences with additional features and visualizations

## 🚀 Technologies Used

- **Next.js 15**: React framework with App Router
- **React 19**: UI library for building component-based interfaces
- **TypeScript**: Static typing for better code quality
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Headless UI**: Unstyled, accessible UI components
- **Heroicons**: Beautiful hand-crafted SVG icons

## 🛠️ Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn or pnpm or bun

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecocircuit.git
   cd ecocircuit
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📂 Project Structure

```
ecocircuit/
├── app/                  # Next.js App Router
│   ├── components/       # Reusable UI components
│   │   ├── collection/   # Collection scheduling components
│   │   ├── dashboard/    # User dashboard components
│   │   ├── home/         # Landing page components
│   │   ├── layout/       # Layout components (Navbar, Footer)
│   │   └── marketplace/  # Marketplace components
│   ├── calculator/       # Points calculator page
│   ├── collection/       # Collection scheduling page
│   ├── dashboard/        # User dashboard page
│   ├── marketplace/      # Marketplace page
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Landing page
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── logo.png          # Logo
├── .eslintrc.js          # ESLint configuration
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies
├── postcss.config.js     # PostCSS configuration
├── tailwind.config.js    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 🎨 Design System

EcoCircuit uses a consistent design system with the following key elements:

### Colors

- **Primary Green**: `#1E5631` - Main brand color
- **Tech Blue**: `#0077CC` - Secondary color for technical elements
- **Accent Orange**: `#DA7635` - Accent color for highlights and CTAs
- **Background**: `#F2E8DC` - Light background color
- **Text**: `#1A1A1A` - Dark text color for better contrast

### Typography

- **Headings**: Montserrat (Bold)
- **Body**: Open Sans (Regular, Medium)

## 🔄 Animations

The application features various animations to enhance user experience:

- Scroll-triggered animations using Framer Motion and Intersection Observer
- Hover and tap animations for interactive elements
- Page transitions and loading states
- Parallax effects on the landing page
- Counter animations for statistics

## 📱 Responsive Breakpoints

- **Small (sm)**: 640px and up
- **Medium (md)**: 768px and up
- **Large (lg)**: 1024px and up
- **Extra Large (xl)**: 1280px and up
- **2XL (2xl)**: 1536px and up

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Bhanu Prakash** - Lead Developer
- **Harshith** - UI/UX Designer
- **Dharshan** - Backend Engineer

## 📞 Contact

- Email: alphamoris45@gmail.com
- Phone: +91 7010815310
- Address: Paniamalar Engineering College, Chennai

---

Built with ❤️ for a sustainable future.
