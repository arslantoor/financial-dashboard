# Financial Dashboard

A modern financial dashboard built with React, Vite, and JSON Server. Features include card management, transaction tracking, contact management, and statistical analysis.

## Features

- 💳 Credit Card Management
- 📊 Transaction History
- 👥 Contact Management
- 📈 Statistical Analysis
- 🎨 Modern UI with Tailwind CSS
- 📱 Responsive Design
- 🔄 Real-time Data Updates

## Tech Stack

- **Frontend:**
  - React 18
  - Vite
  - Redux Toolkit
  - Tailwind CSS
  - Chart.js
  - React Slick
  - React Router DOM

- **Backend:**
  - JSON Server
  - Node.js

## Getting Started

### Prerequisites

- Node.js (>=14.0.0)
- Yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd financial-dashboard
```

2. Install dependencies:
```bash
yarn install
```

3. Create a `.env` file in the root directory:
```bash
VITE_API_URL=http://localhost:3001
```

### Development

1. Start the development server:
```bash
yarn dev:all
```

This will start:
- Vite dev server at `http://localhost:3000`
- JSON Server at `http://localhost:3001`

### Production

1. Build the application:
```bash
yarn build
```

2. Start the production server:
```bash
yarn start
```

## Project Structure

```
financial-dashboard/
├── db.json
├── eslint.config.mjs
├── index.html
├── LICENSE
├── package.json
├── postcss.config.js
├── README.md
├── server.js
├── src
│   ├── App.js
│   ├── components
│   │   ├── cards
│   │   │   ├── CardChip.js
│   │   │   ├── CardItem.css
│   │   │   ├── CardItem.js
│   │   │   ├── CreditCardListing.js
│   │   │   ├── QuickTransferCard.js
│   │   │   └── QuickTransferContact.js
│   │   ├── charts
│   │   │   ├── BarChartComponent.js
│   │   │   ├── LineChartComponent.js
│   │   │   └── PieChartComponent.js
│   │   ├── error
│   │   │   └── ErrorBoundary.js
│   │   ├── layout
│   │   │   ├── Header.css
│   │   │   ├── Header.js
│   │   │   ├── Layout.js
│   │   │   ├── NavItems.js
│   │   │   └── Sidebar.js
│   │   ├── settings
│   │   │   ├── DateOfBirthInput.css
│   │   │   ├── DateOfBirthInput.js
│   │   │   ├── FormInput.js
│   │   │   ├── PreferencesSettings.js
│   │   │   ├── ProfileForm.js
│   │   │   ├── ProfileSettings.js
│   │   │   ├── SecuritySettings.js
│   │   │   └── TabsComponent.js
│   │   ├── transactions
│   │   │   └── TransactionItem.js
│   │   └── ui
│   │       ├── NavItems.js
│   │       └── Search.js
│   ├── hooks
│   │   ├── useCards.js
│   │   ├── useContacts.js
│   │   ├── useInitialData.js
│   │   ├── useStatistics.js
│   │   └── useTransactions.js
│   ├── index.css
│   ├── index.js
│   ├── pages
│   │   ├── CreditCards.js
│   │   ├── Dashboard.js
│   │   └── Settings.js
│   ├── routes
│   │   └── routes.js
│   ├── services
│   │   └── api.js
│   ├── store
│   │   ├── slices
│   │   │   ├── cardsSlice.js
│   │   │   ├── statisticsSlice.js
│   │   │   ├── transactionsSlice.js
│   │   │   └── userSlice.js
│   │   └── store.js
│   └── styles
│       ├── globals.css
│       └── slick-custom.css
├── tailwind.config.js
├── vercel-build.sh
├── vercel.json
├── vite.config.js
└── yarn.lock
```

## API Endpoints

- `/api/currentUser` - User information
- `/api/contacts` - Contact management
- `/api/cards` - Credit card management
- `/api/transactions` - Transaction history
- `/api/statistics` - Statistical data

## Deployment

This project is configured for deployment on Vercel:

1. Push your code to GitHub
2. Import your repository in Vercel
3. Deploy

The application will automatically handle both the frontend and backend through a single deployment.

## Development Guidelines

- Use Yarn for package management
- Follow the existing component structure
- Maintain type safety
- Write clean, reusable components
- Follow the established styling patterns with Tailwind CSS

## Available Scripts

- `yarn dev` - Start Vite development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn server` - Start JSON Server
- `yarn dev:all` - Start both frontend and backend in development mode

## Environment Variables

- `VITE_API_URL` - API base URL

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details 