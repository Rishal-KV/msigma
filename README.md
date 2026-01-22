# MSigma Project

A comprehensive platform with a powerful backend and a modern user interface.

## Project Structure

- **`backend/`**: Express.js API with MongoDB, Redis, and BullMQ for background processing.
- **`user/`**: Modern React frontend built with Vite, TypeScript, and Tailwind CSS.

## Features

- **Dark Mode**: Toggle between light and dark themes for a personalized experience.
- **User Management**: Efficiently manage user data and payment statuses.
- **Job Queue**: Reliable background job processing with BullMQ and Redis.
- **Modern UI**: Built with Shadcn UI and Lucide icons for a premium look and feel.

## Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- MongoDB
- Redis

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd msigma
   ```

2. Install dependencies for both parts:
   ```bash
   # Install Backend dependencies
   cd backend
   npm install

   # Install Frontend dependencies
   cd ../user
   npm install
   ```

### Running the Application

1. **Start the Backend**:
   ```bash
   cd backend
   npm run dev
   ```

2. **Start the Frontend**:
   ```bash
   cd user
   npm run dev
   ```

## Backend Details

The backend is built with:
- **Express.js**: Web framework
- **MongoDB**: Primary database
- **Redis & BullMQ**: For handling scheduled tasks and retries
- **TypeScript**: For type safety

## User Frontend Details

The frontend is built with:
- **React 19**: Modern UI library
- **Vite**: Ultra-fast build tool
- **Tailwind CSS**: Utility-first styling
- **Shadcn UI**: High-quality UI components
- **Radix UI**: Accessible primitives
- **React Router**: For client-side routing
- **Lucide React**: Beautiful icons
- **Dark Mode**: Supported via `ThemeProvider`

## Scripts

### Backend
- `npm run dev`: Start developmental server with ts-node-dev
- `npm run build`: Compile TypeScript to JavaScript
- `npm start`: Run the compiled production server
- `npm run type-check`: Run TypeScript compiler without emitting files

### Frontend (User)
- `npm run dev`: Start Vite development server
- `npm run build`: Build for production
- `npm run lint`: Lint the code
- `npm run preview`: Preview the production build
