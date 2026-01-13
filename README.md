# Dynamic Color Clock

A beautiful, dynamic clock built with React and npm that displays the current date and time with real-time updates.

## Features
- Real-time clock that updates every second
- Displays both date and time in readable format
- Modern, colorful UI with gradient background
- Responsive design for all screen sizes
- Uses date-fns for reliable date formatting

## Technologies Used
- React 18
- Vite (build tool)
- date-fns (date formatting library)
- CSS3 (styling)

## Installation Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (comes with Node.js)

### Steps to Run Locally

1. Clone this repository:
```bash
   git clone [your-repository-url]
   cd color-clock
```

2. Install dependencies:
```bash
   npm install
```

3. Start the development server:
```bash
   npm run dev
```

4. Open your browser and navigate to:
```
   http://localhost:5173
```

## Project Structure
```
color-clock/
├── src/
│   ├── App.jsx          # Main clock component
│   ├── App.css          # Styling for the clock
│   └── main.jsx         # Application entry point
├── package.json         # Project dependencies
└── README.md           # This file
```

## How It Works
- The app uses React's `useState` hook to manage the current time
- `useEffect` hook sets up an interval that updates the time every second
- The `date-fns` library formats the date and time into readable strings
- CSS provides a modern, colorful interface with animations

## Author
Trina Kahu Luseno
github: @kahutrina77-code

## License
MIT
