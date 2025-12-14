<div align="center">

  <h1>Evento - Find Events Around You</h1>

  <p>
    A modern, responsive web application for discovering events in your area. Built with Next.js, Server Components, and performance in mind.
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a>
  </p>

[![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)](https://www.prisma.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

</div>

<br />

## 🚀 Features

<div align="center">
  <table>
    <tr>
      <td>🏙️ <b>City Browsing</b></td>
      <td>Browse events specially curated for Austin and Seattle with specific content.</td>
    </tr>
    <tr>
      <td>↔️ <b>Pagination</b></td>
      <td>Navigate through large lists of events efficiently with server-side pagination.</td>
    </tr>
    <tr>
      <td>⚡ <b>Performance</b></td>
      <td>Built with Next.js Server Components for fast initial loads and SEO optimization.</td>
    </tr>
     <tr>
      <td>🎨 <b>Modern UI</b></td>
      <td>Beautiful, responsive design using Tailwind CSS and Framer Motion animations.</td>
    </tr>
  </table>
</div>

## 🛠️ Tech Stack

This project uses a modern full-stack approach to ensure scalability and type safety.

- **Core**: [Next.js 14](https://nextjs.org/) (App Router), [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [Framer Motion](https://www.framer.com/motion/)
- **Database & ORM**:
  - **PostgreSQL**: Robust relational database.
  - **Prisma**: Type-safe ORM for database interactions and schema management.
- **Validation**: [Zod](https://zod.dev/)
- **Data Fetching**: Server Components & `unstable_cache` for efficient data caching.

## � Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **PostgreSQL** database instance

### Installation

1.  **Clone the repository**

    ```bash
    git clone https://github.com/StartHereCode/evento.git
    cd evento
    ```

2.  **Install dependencies**

    ```bash
    npm install
    ```

3.  **Set up Environment Variables**

    Create a `.env` file in the root directory and add your database connection string:

    ```env
    DATABASE_URL="postgresql://user:password@localhost:5432/evento_db?schema=public"
    ```

4.  **Database Setup**

    Push the schema to your database and seed it with initial data:

    ```bash
    npx prisma db push
    npx prisma db seed
    ```

5.  **Run the development server**
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` in your browser.

## 📂 Project Structure

```bash
src/
├── app/              # Next.js App Router pages and layouts
├── components/       # Reusable UI components
├── lib/              # Utilities, hooks, and server-side logic
├── prisma/           # Database schema and seed script
└── public/           # Static assets
```
