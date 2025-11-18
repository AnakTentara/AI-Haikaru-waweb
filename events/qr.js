export default {
  name: 'qr',
  once: false,
  execute(bot, qr) {
    console.log('\n📲 Pindai kode QR ini dengan WhatsApp Anda:');
    console.log('═══════════════════════════════════════\n');
    console.log('SCAN_THIS_QR: ', qr);
    console.log('\n═══════════════════════════════════════');
    console.log('⏳ Menunggu autentikasi...\n');
  }
};
