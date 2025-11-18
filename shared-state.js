// shared-state.js

/**
 * Variabel global untuk menampung status QR dan Autentikasi.
 * Ini akan diakses oleh Server Express dan Event Handlers.
 */
export let currentQRCode = null;
export let isAuthenticated = false;

export function setQRCode(qrString) {
    currentQRCode = qrString;
    isAuthenticated = false; // Reset status jika QR baru muncul
    console.log(`[SHARED_STATE] QR Code diatur.`);
}

export function setAuthenticated(isAuth) {
    isAuthenticated = isAuth;
    currentQRCode = null; // Hapus QR saat berhasil login
    console.log(`[SHARED_STATE] Status Autentikasi diatur: ${isAuth}`);
}