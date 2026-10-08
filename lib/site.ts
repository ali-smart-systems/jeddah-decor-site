export const site = {
  brand: "معلم ديكورات جدة",
  phoneDisplay: "0566004551",
  phoneInternational: "966566004551",
  instagram: "https://www.instagram.com/hmzhly1286",
  // بعد شراء الدومين ضع عنوانه هنا بدون / في النهاية
  domain: (process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")).replace(/\/$/, ""),
};
export const pages = [
  {slug:"", title:"الرئيسية", heading:"ديكورات تحوّل مساحتك إلى تحفة فنية", lead:"تنفيذ ديكورات داخلية في جدة بذوق عصري وتشطيبات متقنة، من الفكرة حتى اللمسة الأخيرة.", category:"تصاميم مختارة", start:1, count:10, tone:"home"},
  {slug:"gypsum", title:"ديكورات الجبس", heading:"ديكورات جبس بتفاصيل متقنة", lead:"أسقف جبسية، براويز جدارية، وإضاءة مخفية بتنسيق يليق بمساحتك.", category:"أعمال الجبس", start:11, count:6, tone:"gypsum"},
  {slug:"wood", title:"بديل الخشب والرخام", heading:"لمسات راقية ببديل الخشب والرخام", lead:"جدران تلفزيون، مداخل، وكسوات ديكورية تمنح المكان طابعًا فاخرًا.", category:"الكسوات والبدائل", start:17, count:6, tone:"wood"},
  {slug:"walls", title:"ديكورات الجدران", heading:"جدران تحكي عن ذوقك", lead:"فوم، شيبورد، بانوهات ولمسات جدارية تجمع بين الأناقة والبساطة.", category:"ديكورات الجدران", start:23, count:6, tone:"walls"},
  {slug:"lighting", title:"الإضاءة والتشطيبات", heading:"إضاءة تبرز جمال التفاصيل", lead:"تنسيق الإضاءة الديكورية والتشطيبات الداخلية لصناعة أجواء مريحة ومميزة.", category:"الإضاءة والتشطيبات", start:29, count:6, tone:"lighting"},
  {slug:"works", title:"معرض الأعمال", heading:"أعمال تلهم مشروعك القادم", lead:"استعرض نماذج من أفكار الديكور، وتواصل معنا لبدء تنفيذ فكرتك في جدة.", category:"معرض الأعمال", start:35, count:6, tone:"works"},
] as const;
export function imageName(n:number){return `decor${String(n).padStart(2,"0")}.webp`}
