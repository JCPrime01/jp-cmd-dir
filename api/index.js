export default async function handler(req, res) {
  const ua = (req.headers["user-agent"] || "").toLowerCase();
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim();
  const botUAs = ["facebookexternalhit","facebot","facebookbot","adsbot","googlebot","bingbot","twitterbot","linkedinbot","slackbot","whatsapp","telegrambot","crawler","spider","headless","phantom","python","curl","wget","java/","apache-httpclient"];
  const metaIPs = ["66.220.","69.63.","69.171.","173.252.","31.13.","157.240.","179.60.","204.15."];
  const isBot = botUAs.some(b => ua.includes(b));
  const isMeta = metaIPs.some(r => ip.startsWith(r));
  if (isBot || isMeta) {
    res.writeHead(302, { Location: "https://grupojogadorcaro.com.br/quem-e-jota" });
    res.end();
    return;
  }
  const links = [
    // CMD Nina
    "https://chat.whatsapp.com/FjGKrV4RtSF1e46l8y7wKo", // 126
    "https://chat.whatsapp.com/DIhVtELmVEU6ho9vMCHGa5", // 127
    "https://chat.whatsapp.com/L4C6Px6oO4wLoHfXJXUnlz", // 128
    "https://chat.whatsapp.com/LskY7BSLMpK8lAChFrhocj", // 130
    "https://chat.whatsapp.com/KSJPKfTD7tvKAL0SrorOZp", // 131
    "https://chat.whatsapp.com/J0EJOr4j6Nx51Vmaw1CEiY", // 132
    // Direto
    "https://chat.whatsapp.com/EJm8Xu09IQC8g2pMeiehro", // 117
    "https://chat.whatsapp.com/EJm8Xu09IQC8g2pMeiehro", // 108
    "https://chat.whatsapp.com/EzadtmN5alqFfcBHOgK8Ji", // 121
    // Kito
    "https://chat.whatsapp.com/FJ6NRIEk68wIrV7JqBURwB", // 717
    "https://chat.whatsapp.com/E5fJrEdInTVDRokWQVbrlp", // 718
    "https://chat.whatsapp.com/CfLQBUDwJgc8CHLl1rdEVZ", // 723
    "https://chat.whatsapp.com/J2GpbQxHz0kIUNucMemKTq", // 722
    "https://chat.whatsapp.com/C9Kf9cqkfLXIr3n9YNfsQx", // 724
  ];
  const link = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: link });
  res.end();
}
