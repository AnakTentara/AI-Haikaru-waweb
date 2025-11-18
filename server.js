// server.js

import 'dotenv/config';
import express from "express";
import { currentQRCode, isAuthenticated } from './shared-state.js'; // <-- IMPORT STATUS

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    if (isAuthenticated) {
        // Teks normal jika bot sudah login
        return res.send("AI-Haikaru is awake and listening! ✅");
    }

    if (currentQRCode) {
        // Jika belum login dan QR tersedia, tampilkan QR sebagai tautan gambar
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(currentQRCode)}`;
        
        const htmlResponse = `
            <!DOCTYPE html>
            <html>
            <head><title>QR Code WA Bot</title></head>
            <body style="text-align: center; font-family: sans-serif;">
                <h1>🤖 AI-Haikaru | Scan QR</h1>
                <p>Bot belum terautentikasi. Silakan pindai gambar di bawah ini dengan WhatsApp Anda.</p>
                <img src="${qrUrl}" alt="WhatsApp QR Code" style="border: 1px solid #ccc; padding: 10px;">
                <p>Status: <strong>Menunggu Scan...</strong></p>
                <p>Endpoint ini akan berubah menjadi status normal setelah bot login.</p>
            </body>
            </html>
        `;
        return res.send(htmlResponse);
    }
    
    // Jika belum login dan QR belum siap (misalnya, cold start/loading)
    res.send("AI-Haikaru sedang memuat atau menunggu inisialisasi QR Code. Coba refresh.");
});

app.get("/status", (req, res) => {
    res.json({
        status: isAuthenticated ? "running" : "waiting_for_qr_scan",
        bot: "AI-Haikaru",
        service: "Uptime Keeper",
        isAuthenticated: isAuthenticated,
        qrCodeAvailable: !!currentQRCode 
    });
});

export default app;