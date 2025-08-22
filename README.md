# Bewear - Clothing E-commerce

A modern e-commerce platform for a clothing store built with Next.js and TypeScript.

## Tech Stack

- **Framework:** Next.js 15
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** PostgreSQL with Drizzle ORM
- **Authentication:** Better Auth
- **Payment Processing:** Stripe
- **State Management:** TanStack Query (React Query)
- **Forms:** React Hook Form with Zod validation
- **UI Components:** Radix UI primitives
- **API Integration:** REST API endpoints

## Key Features

- User authentication and authorization
- Product catalog with categories
- Shopping cart functionality
- Secure checkout process with Stripe
- Order management
- Shipping address management
- Responsive design

## Getting Started

### Prerequisites

- Node.js (LTS version)
- PostgreSQL database
- Stripe account for payments

### Setup

1. Clone the repository:
```bash
git clone https://github.com/tassioNS9/bewear.git
cd bewear
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env` file with the following variables:
```
DATABASE_URL=your_postgresql_connection_string
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_stripe_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
```

4. Set up the database:
```bash
npm run db:migrate
```

5. Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Project Structure

- `/src/actions` - Server actions for data mutations
- `/src/app` - Next.js app router pages and API routes
- `/src/components` - Reusable UI components
- `/src/db` - Database schema and configurations
- `/src/hooks` - Custom React hooks for queries and mutations
- `/src/lib` - Utility functions and configurations

## Design Patterns

- Server Actions for data mutations
- Repository pattern for database operations
- Custom hooks for state management
- Component composition with Radix UI
- Middleware for authentication
- API route handlers for external integrations
