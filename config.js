/* ============================================================
   CONFIG.JS
   This is the ONLY file you need to edit to make this site yours.
   Replace the placeholder values below with your real info.
   Do not touch script.js or style.css unless you want to change
   how things look/behave — this file only controls WHAT shows.
   ============================================================ */

const CONFIG = {

  // ---------- IDENTITY ----------
  name: "Alex Rivera",                       // your name / brand
  role: "Video Editor & Motion Designer",     // your title/tagline
  location: "Mumbai, India",                  // shown in hero + contact
  tagline: "I cut stories that move — trailers, gaming edits and motion graphics built frame by frame.",
  profilePic: "assets/profile.jpg",           // put your photo in the assets/ folder
  logoText: "EDIT",                           // short text logo in the nav (e.g. your initials)
  yearsExperience: "3+",

  // ---------- ABOUT ----------
  bio: "I'm a video editor and motion designer who's spent the last few years turning raw footage into stories that actually keep people watching. My focus is fast-paced gaming edits, cinematic trailers, and motion graphics — with an eye for rhythm, sound design and pacing. When I'm not editing, I'm probably studying frame-by-frame breakdowns of my favorite trailers.",

  skills: [
    "Video Editing", "Color Grading", "Motion Graphics", "Sound Design",
    "VFX Compositing", "Gaming Montages", "Trailer Editing", "2D Animation"
  ],

  // Software badges — used both as floating 3D objects in the hero
  // and as the strip in the About section.
  software: [
    { name: "After Effects", short: "Ae", color: "#1E1B33", glow: "#9999FF" },
    { name: "Premiere Pro",  short: "Pr", color: "#1B1030", glow: "#9999FF" },
    { name: "DaVinci Resolve", short: "DR", color: "#0F1B2B", glow: "#4CC9FF" },
    { name: "Cinema 4D",     short: "C4", color: "#101A33", glow: "#5C7CFA" },
    { name: "Photoshop",     short: "Ps", color: "#0D2233", glow: "#4CF3FF" },
    { name: "Blender",       short: "Bl", color: "#231A0D", glow: "#FF9F4C" }
  ],

  // ---------- CONTACT ----------
  email: "hello@yourname.com",
  phone: "+91 98765 43210",

  socials: [
    { label: "YouTube",   url: "https://youtube.com/@yourchannel" },
    { label: "Instagram", url: "https://instagram.com/yourhandle" },
    { label: "LinkedIn",  url: "https://linkedin.com/in/yourname" },
    { label: "Behance",   url: "https://behance.net/yourname" }
  ],

  // ---------- SHOWREEL ----------
  // Paste just the YouTube VIDEO ID, not the full link.
  // e.g. from https://www.youtube.com/watch?v=aqz-KE-bpKQ the ID is "aqz-KE-bpKQ"
  reelYoutubeId: "aqz-KE-bpKQ",
  reelDuration: "00:04:12:00", // shown next to the scrubber, purely decorative — set to your reel's runtime

  // ---------- PORTFOLIO PROJECTS ----------
  // Add, remove or edit as many of these as you like.
  // "category" is used for the filter buttons above the grid.
  // "youtubeId" is the video that plays when the card is clicked.
  projects: [
    {
      title: "Valorant Montage — Episode 04",
      category: "Gaming",
      youtubeId: "aqz-KE-bpKQ",
      note: "Fast-cut FPS montage, 128bpm sync"
    },
    {
      title: "Neon Run — Cinematic Trailer",
      category: "Trailer",
      youtubeId: "aqz-KE-bpKQ",
      note: "Game trailer, 3D title cards"
    },
    {
      title: "Startup Launch Film",
      category: "Commercial",
      youtubeId: "aqz-KE-bpKQ",
      note: "Brand film, motion graphics"
    },
    {
      title: "Apex Legends — Best Plays",
      category: "Gaming",
      youtubeId: "aqz-KE-bpKQ",
      note: "Highlight reel, kinetic captions"
    },
    {
      title: "Short Film — \"Static\"",
      category: "Narrative",
      youtubeId: "aqz-KE-bpKQ",
      note: "Color grade + sound design"
    },
    {
      title: "Music Video — Loop",
      category: "Music",
      youtubeId: "aqz-KE-bpKQ",
      note: "Beat-synced edit, VFX transitions"
    }
  ]
};
