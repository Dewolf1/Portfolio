# Futuristic AI Portfolio

A premium, interactive portfolio featuring a 3D robot, cybernetic design, and real-time responsiveness. Built for **Mohd Adeeb** (Dewolf1).

## 🚀 Live Demo
Managed by Render: [mohdadeeb.onrender.com](https://mohdadeeb.onrender.com)

## 🛠 Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4 (Vanilla CSS Refinements)
- **3D**: Spline + React Spline
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Render (Static Site)

## 📋 Requirements
- **Node.js**: v20 or higher
- **Package Manager**: npm or yarn

## 💻 Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Dewolf1/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🚢 Render Deployment (Live Site)

To host this as a **Static Site** on Render.com:

1. **Connect your GitHub** to Render.
2. **Create a New Static Site**.
3. **Build Settings**:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `out` (Note: Ensure `next.config.js` has `output: 'export'`)

> [!IMPORTANT]
> Since this project is highly interactive with 3D elements, ensure the build environment has sufficient memory.

## 📁 Project Structure
- `/app`: Next.js pages and globals
- `/components/ui`: Custom cyber-themed components (Card, Spotlight, SplineScene)
- `/public`: Static assets including `resume_python.pdf`
- `/lib`: Utility functions
