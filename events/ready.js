// events/ready.js
import { setAuthenticated } from '../shared-state.js'; // <-- IMPORT FUNGSI SET

export default {
  name: 'ready',
  once: true,
  execute(bot) {
    // Set status login berhasil
    setAuthenticated(true); 
    
    console.log('═══════════════════════════════════════');
    console.log('✅ Bot WhatsApp siap digunakan!');
    console.log(`📱 Login sebagai: ${bot.client.info.pushname}`);
    console.log(`📞 Nomor: ${bot.client.info.wid.user}`);
    console.log(`📋 Perintah dimuat: ${bot.commands.size}`);
    console.log(`⚡ Prefix: ${bot.prefix}`);
    console.log('═══════════════════════════════════════');
  }
};