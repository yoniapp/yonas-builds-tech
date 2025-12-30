# AI Rules for Yonas Mulugeta Portfolio App

This document outlines the core technologies used in this project and provides guidelines for their usage to maintain consistency and best practices.

## Tech Stack Overview

This application is built with a modern web development stack, focusing on performance, maintainability, and a great developer experience:

*   **Vite**: A fast build tool and development server for modern web projects.
*   **TypeScript**: Ensures type safety and improves code quality and maintainability.
*   **React**: A declarative, component-based JavaScript library for building user interfaces.
*   **Tailwind CSS**: A utility-first CSS framework for rapidly building custom designs.
*   **shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS.
*   **Framer Motion**: A production-ready motion library for React to power animations.
*   **React Router DOM**: For declarative client-side routing within the application.
*   **Tanstack Query**: For efficient server state management and data fetching.
*   **Lucide React**: A library of beautiful and customizable open-source icons.
*   **Sonner**: A modern toast component for displaying notifications.

## Library Usage Guidelines

To ensure consistency and leverage the strengths of each library, please adhere to the following rules:

*   **UI Components**:
    *   **Primary Choice**: Always use components from `shadcn/ui` (`src/components/ui/`) when available.
    *   **Custom Components**: If a required component is not available in `shadcn/ui`, create a new, small, and focused component in `src/components/` using Tailwind CSS for styling. Do **not** modify existing `shadcn/ui` component files directly.
*   **Styling**:
    *   **Tailwind CSS Only**: All styling must be done using Tailwind CSS utility classes. Avoid writing custom CSS unless absolutely necessary for global styles defined in `src/index.css`.
    *   **`cn` Utility**: Use the `cn` utility function from `src/lib/utils.ts` for conditionally applying and merging Tailwind classes.
*   **Icons**:
    *   **Lucide React**: Use icons exclusively from the `lucide-react` library.
*   **Routing**:
    *   **React Router DOM**: Handle all client-side navigation and routing using `react-router-dom`.
    *   **Route Definition**: Keep all main application routes defined within `src/App.tsx`.
*   **State Management & Data Fetching**:
    *   **Tanstack Query**: For managing server state, fetching data, caching, and synchronization, use `Tanstack Query`.
*   **Animations**:
    *   **Framer Motion**: Implement all complex UI animations, transitions, and gestures using `framer-motion`.
*   **Toasts/Notifications**:
    *   **Sonner**: Use the `Sonner` component and its associated functions for displaying all types of toast notifications (success, error, loading, etc.).
*   **Form Handling**:
    *   **React Hook Form & Zod**: For form creation, validation, and submission, use `react-hook-form` in conjunction with `zod` for schema validation.
*   **Date Manipulation**:
    *   **date-fns**: Use `date-fns` for any date parsing, formatting, or manipulation tasks.
*   **Parallax Effects**:
    *   **`parallax-floating`**: For creating parallax or floating visual effects, utilize the `Floating` and `FloatingElement` components found in `src/components/ui/parallax-floating.tsx`.
*   **Mobile Detection**:
    *   **`useIsMobile` Hook**: Use the `useIsMobile` hook from `src/hooks/use-mobile.tsx` to detect if the user is on a mobile device for responsive logic.