// events/qr.js
import qrcode from 'qrcode-terminal';
import { setQRCode } from '../shared-state.js'; // <-- IMPORT FUNGSI SET

export default {
  name: 'qr',
  once: false,
  execute(bot, qr) {
    // 1. Simpan string QR ke status global
    setQRCode(qr); 

    // 2. Tetap cetak di Logs Vercel untuk debugging terminal
    console.log('\n📲 Pindai kode QR ini dengan WhatsApp Anda:');
    console.log('═══════════════════════════════════════\n');
    qrcode.generate(qr, { small: true });
    console.log('\n═══════════════════════════════════════');
    console.log('⏳ Menunggu autentikasi... (Cek halaman utama di Vercel)\n');
  }
};