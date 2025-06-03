async function obtenerInfoIP() { // Reemplaza con tu token real
  const response = await fetch(`https://api.ipinfo.io/lite/8.8.8.8?token=34d1809199c50b`);
  const data = await response.json();
  return data;  // Objeto con toda la info (ip, ciudad, región, país, org, timezone, etc)
}

async function enviarInfoADiscord(info) {
  const webhookURL = 'https://discord.com/api/webhooks/WEBHOOK_ID/WEBHOOK_TOKEN'; // Reemplaza con tu webhook

  // Crear un mensaje bonito con la info:
  const mensaje = `
📡 **Nueva visita registrada:**
- IP: ${info.ip}
- Ciudad: ${info.city}
- Región: ${info.region}
- País: ${info.country}
- ISP/Org: ${info.org}
- Zona horaria: ${info.timezone}
  `;

  await fetch(webhookURL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: mensaje })
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  const infoIP = await obtenerInfoIP();
  await enviarInfoADiscord(infoIP);
});
