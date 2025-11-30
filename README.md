
<div align="center">
  
# 🌌 **Metaspector**

</div>

<div align="center">

<img src="https://github.com/MiteDyson/Metaspector/blob/main/Logo.png" width="140" alt="Metaspector Logo">

### 🔍 *Reveal the hidden story inside your images.*

Extract metadata, map geolocation, and visualize stunning shader effects — instantly.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?logo=vercel)](https://image-metadata-inspector.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-06B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Leaflet](https://img.shields.io/badge/Leaflet-1.9-199900?logo=leaflet)](https://leafletjs.com/)
[![OGL](https://img.shields.io/badge/OGL-WebGL-blueviolet)](https://github.com/oframe/ogl)
[![Vercel](https://img.shields.io/badge/Vercel-Deploy-black?logo=vercel)](https://vercel.com/)


</div>

---

## ✨ **Features**

### 🖼 Metadata Extraction

* Upload any image and instantly view its **EXIF metadata**
* Inspect camera data, resolution, DPI, ISO, timestamp, and more

### 🗺 Geolocation Mapping

* Automatically detect GPS-based EXIF tags
* Display coordinates on a **Leaflet-powered interactive map**

### 🌐 Shader Orb Animation

* Smooth, WebGL-based **shader orb** built with **OGL**
* Adds a premium, futuristic feel to the UI

### 🎨 Enhanced UI & Effects

* Dynamic background animations via **React Bits**
* Clean, minimal interface powered by **TailwindCSS**
* Fully responsive on all devices

### 🚀 Deployment-Ready

* Zero-config deployment with **Vercel**
* Perfect lighthouse performance and instant cold starts

---

## 🛠️ **Tech Stack**



| Technology      | Purpose                               |
| --------------- | ------------------------------------- |
| **Next.js 15**  | App framework for routing & UI        |
| **React 19**    | Rendering & interactive components    |
| **TypeScript**  | Types & strong tooling                |
| **TailwindCSS** | Utility-first design for fast styling |
| **React Bits**  | Animated backgrounds                  |
| **OGL (WebGL)** | Custom shader orb visual              |
| **Leaflet.js**  | GPS map rendering                     |
| **Vercel**      | Hosting & CI/CD                       |

---

## 📂 **Project Structure**

```bash
Metaspector/
│── components/              # Reusable UI components
│   ├── ExifUploader.tsx     # Handles image upload & EXIF parsing
│   ├── ExifViewer.tsx       # Displays extracted metadata
│   ├── MapViewer.tsx        # Renders location using Leaflet
│   └── Orb/                 # WebGL shader orb animation
│
│── pages/
│   ├── index.tsx            # Main application UI
│   └── _app.tsx             # Global layout & styles
│
│── public/                  # Static assets (icons, logos)
│── styles/                  # Global Tailwind styles
│── utils/                   # EXIF parsing logic & helpers
│── package.json
│── next.config.js
│── tsconfig.json
│── README.md
```

---

## 🖼️ **Sample Images for Testing**

You can test EXIF metadata extraction using the open-source **EXIF Samples Repository**:
[Here](https://github.com/ianare/exif-samples)

Contains clean samples with camera data, GPS tags, and other metadata.

---

## 🚀 **Getting Started**

Clone and run locally:

```bash
# Clone
git clone https://github.com/MiteDyson/Metaspector.git

# Enter folder
cd Metaspector

# Install deps
npm install

# Run dev server
npm run dev
```

Now visit → **[http://localhost:3000](http://localhost:3000)**

---

## 🚢 **Deploy to Production**

Deploy instantly with **Vercel**:

1. Push the repo to GitHub
2. Import your project into Vercel
3. Deploy with a single click


---
## 🌟 **Live Demo** : [Here](https://image-metadata-inspector.vercel.app/)
---


<div align="center">

### 💫 *Metaspector — Because every image has a story.*

If you found this useful, please ⭐ the repo!

</div>

---
