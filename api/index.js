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
    "https://chat.whatsapp.com/EJm8Xu09IQC8g2pMeiehro", // comunidade 1
    "https://chat.whatsapp.com/FqEu31mnpWg1sb8p1obh68", // comunidade 2
    "https://chat.whatsapp.com/IZNGcTD7uuq2M1cfB7FLlR", // comunidade 3
    "https://chat.whatsapp.com/EzadtmN5alqFfcBHOgK8Ji",  // comunidade 4
    "https://chat.whatsapp.com/EoLhmmeiQpGAHQ1yU9CW7A", // comunidade 104
    "https://chat.whatsapp.com/JhDM8UdeHQg8pxIm0ywl80", // comunidade 105
    "https://chat.whatsapp.com/EafpD39fayIIyRjOCC6Pfk",  // comunidade 106
    "https://chat.whatsapp.com/BaFz3FnnxTb3Dbd9c3r7Wm", // comunidade 107
    "https://chat.whatsapp.com/KSJPKfTD7tvKAL0SrorOZp", // comunidade 131
    "https://chat.whatsapp.com/HdxZGcDeTd0KKnLrvjLjHS", // comunidade 109
    "https://chat.whatsapp.com/EAogaedZmUQ5X7C9uFh6V2",  // comunidade 713
    "https://chat.whatsapp.com/HX8Eh87WZ7h6cwMqnsNQmm", // comunidade 714
    "https://chat.whatsapp.com/J8jqLjlVCwZAJIqNWR7Yr0",  // comunidade 715
    "https://chat.whatsapp.com/FQH4sVDKle6DRxM8qHTHV5",  // comunidade 716
    "https://chat.whatsapp.com/EklvDccWc2pK5zgXvKBTtz",  // comunidade 718
  ];
  const link = links[Math.floor(Math.random() * links.length)];
  res.writeHead(302, { Location: link });
  res.end();
}
