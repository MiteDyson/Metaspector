
# 🌌 Image Metadata Inspector

> 🔍 A sleek web app to **reveal the hidden story inside your images**.
> Extract EXIF metadata, visualize geolocation on a map, and enjoy a dynamic, interactive UI.

---

## ✨ Features  

✅ Upload images and instantly extract metadata <br>  
✅ Inspect camera details, dimensions, and more <br>  
✅ Visualize **geo-coordinates on an interactive map** <br>  
✅ Interactive **shader orb** powered by WebGL <br>  
✅ Beautiful **background animations** powered by **React Bits** <br>  
✅ Responsive UI styled with TailwindCSS <br>  
✅ One-click deployment with **Vercel**  

---

## 🛠️ Tech Stack

<p align="center">
  <img src="https://skillicons.dev/icons?i=next,react,ts,tailwind,vercel,git,github" alt="Tech logos" />
</p>  

* ⚡ **Next.js 15** – Fast, modern React framework
* ⚛️ **React Bits** – Smooth background animations & creative effects
* 🎨 **TailwindCSS** – Utility-first styling
* 🌐 **OGL (WebGL)** – Custom shader orb animation
* 🗺️ **Leaflet.js** – Interactive maps for GPS data
* ☁️ **Vercel** – Zero-config hosting & CI/CD

---


## 📂 Project Structure

Here’s a high-level overview of the codebase:

```bash
Image-Metadata-Inspector/
│── components/           # Reusable UI components
│   ├── ExifUploader.tsx  # Upload & extract EXIF metadata
│   ├── MapViewer.tsx     # Display GPS location on interactive map
│   └── Orb/              # WebGL shader orb animation
│
│── pages/                # Next.js app routes
│   ├── index.tsx         # Main app entry
│   └── _app.tsx          # Global app wrapper
│
│── public/               # Static assets (icons, images, etc.)
│── styles/               # Global styles (Tailwind base)
│── package.json          # Project metadata & dependencies
│── tsconfig.json         # TypeScript config
│── next.config.js        # Next.js configuration
│── README.md             # You’re here 🚀
```

---


## 🖼️ Sample Images

Want to test the app with real-world examples?
Use the excellent open-source **[EXIF Samples Repository](https://github.com/ianare/exif-samples)** maintained by @ianare.

It provides images with embedded EXIF metadata, perfect for experimenting with camera data, GPS tags, and more.

---

## 🚀 Getting Started

Clone the repo and start hacking:

```bash
# Clone repo
git clone https://github.com/MiteDyson/Image-Metadata-Inspector.git

# Enter project folder
cd Image-Metadata-Inspector

# Install dependencies
npm install

# Start dev server
npm run dev
```

👉 Now visit **[http://localhost:3000](http://localhost:3000)**

---

## 🚢 Deployment

Deploy instantly with **Vercel**:

1. Push your repo to GitHub
2. Connect it to [Vercel](https://vercel.com/)
3. Deploy with 1-click 🚀

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/MiteDyson/Image-Metadata-Inspector)

---


🌟 *If you like this project, don’t forget to star ⭐ the repo!*

---


