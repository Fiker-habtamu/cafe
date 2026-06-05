import React from "react";
// import "./Header.css";

export default function Header() {
  return (
    <div
      style={{
        position: "relative",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 1. THE UNBRANDED BACKGROUND VIDEO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover", // Fills the screen without black bars
          zIndex: 1,
          pointerEvents: "none", // Prevents users from pausing or right-clicking
		  overflow:"hidden"
        }}
      >
        {/* PASTE YOUR VERCEL BLOB URL HERE */}
        <source src="https://ifs8je3oh2cjo9o5.public.blob.vercel-storage.com/My%20First%20try%20of%20%EF%BC%82Drink%20B%20roll%EF%BC%82%20ad%20%EF%BD%9C%20Unpaided%20%20%EF%BD%9C%20%20sudanese%20tornado%20dri...%20%5B6910214089428012289%5D.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
	   <div style={{
        position: 'relative',
        zIndex: 2, // Sits perfectly on top of the video
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        color: '#fff',
        backgroundColor: 'rgba(0, 0, 0, 0.4)', // Optional dark tint to make text easy to read
        fontFamily: 'sans-serif'
      }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Welcome to Dina's Cafe</h1>
        <p style={{ fontSize: '1.2rem' }}>This text sits cleanly over your unbranded video.</p>
      </div>
    </div>
  );
}
