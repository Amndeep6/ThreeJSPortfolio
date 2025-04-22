# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js, Tailwind CSS, and Three.js.

## Features

- **Modern Design**: Clean and professional design with smooth animations
- **Responsive**: Fully responsive layout that looks great on all devices
- **Dark Mode**: Toggle between light and dark themes
- **3D Elements**: Interactive 3D model in the hero section using Three.js
- **Animations**: Smooth animations and transitions using Framer Motion
- **SEO Optimized**: Built with SEO best practices in mind
- **Performance Optimized**: Fast loading times and optimized assets
- **Contact Form**: Functional contact form with validation

## Technologies Used

- **Next.js**: React framework for server-rendered applications
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library for React
- **Three.js**: 3D graphics library
- **React Three Fiber**: React renderer for Three.js
- **EmailJS**: Email service for contact form

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `src/app`: Next.js app router pages
- `src/components`: Reusable React components
- `src/hooks`: Custom React hooks
- `src/utils`: Utility functions
- `src/lib`: Library code
- `public`: Static assets

## Customization

### Personal Information

Update your personal information in the following files:

- `src/app/page.tsx`: Home page content
- `src/app/about/page.tsx`: About page content
- `src/app/projects/page.tsx`: Projects data
- `src/app/contact/page.tsx`: Contact information

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file.

### 3D Model

Replace the 3D model in the `src/components/HeroModel.tsx` file with your own model.

## Deployment

This project is ready to be deployed on Vercel:

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Deploy!

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Three.js](https://threejs.org/)
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/)
