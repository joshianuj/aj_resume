# Modern Minimalist Resume

A highly polished, data-driven personal resume website built with **React**, **Vite**, and **Tailwind CSS**. Designed with a focus on premium aesthetics, clean typography, and smooth interactive experiences.

## 🚀 Features

-   **Premium Minimalist Design**: Inspired by high-end designer portfolios, featuring an editorial-style font pairing (Georgia Serif & Sans-serif) and a sophisticated earthy-toned sidebar.
-   **Data-Driven**: All resume content is externalized in `src/data/resume.json` for easy updates without touching the code.
-   **Smooth Animations**: Staggered scroll reveal effects and subtle micro-interactions using **Framer Motion**.
-   **Company Logos**: High-quality SVG logos for professional experience entries.
-   **Mobile Responsive**: Fully optimized for all screen sizes with a clean mobile drawer menu.
-   **University Projects**: Dedicated section for academic work with a distinct grid layout.

## 🛠️ Tech Stack

-   **Frontend**: React 18
-   **Styling**: Tailwind CSS (v4)
-   **Animations**: Framer Motion
-   **Icons**: Lucide React
-   **Build Tool**: Vite

## 📦 Project Structure

```text
personal_resume/
├── public/                # Static assets (logos, profile photo, favicon)
├── src/
│   ├── components/        # Reusable UI components
│   ├── data/              # resume.json (Data source)
│   ├── App.tsx            # Main application layout
│   └── index.css          # Global styles & design tokens
```

## ⚙️ Getting Started

1.  **Clone & Install**:
    ```bash
    git clone [repository-url]
    cd personal_resume
    npm install
    ```

2.  **Development**:
    ```bash
    npm run dev
    ```

3.  **Update Content**:
    Simply edit `src/data/resume.json` to update your experience, projects, skills, and profile info.

4.  **Deployment**:
    ```bash
    npm run build
    ```

## 🎨 Design Tokens

-   **Primary Sidebar**: `#5F4848` (Earthy Brown)
-   **Accent Blue**: `#1E88E5`
-   **Typography**:
    -   Headings: System Sans-serif (Bold)
    -   Body/Summary: Georgia (Serif)

---

Developed with ❤️ using Antigravity.
