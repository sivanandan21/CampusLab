# CampusLab 🚀

A modern engineering laboratory and capstone project portal for engineering students and faculty.

---

## 📁 Project Structure

```text
CampusLab/
├── campuslab_assets/          # Original brand & laboratory graphics
│   ├── brand/                 # CampusLab branding & logos
│   └── labs/                  # S1 - S6 lab covers & project graphics
├── frontend/                  # React + Vite frontend application
│   ├── public/assets/         # Static assets (logo, lab banners)
│   ├── src/
│   │   ├── components/        # UI components (Navbar, LabCard, Modal, Stats, Footer)
│   │   ├── data/              # Semester & Lab data (S1 - S6 + Projects)
│   │   ├── services/          # API client setup (Axios) ready for backend
│   │   ├── App.jsx            # Main dashboard & interactive lab explorer
│   │   └── index.css          # Tailwind CSS styling
│   ├── package.json
│   └── vite.config.js
└── backend/                   # (Planned next phase)
```

---

## 🛠️ Installed Tools & Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **HTTP Client**: Axios (pre-configured in `src/services/api.js`)
- **Package Manager**: pnpm

---

## 🚀 Getting Started

### Run Frontend in Development Mode

```bash
cd frontend
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
cd frontend
pnpm run build
```
