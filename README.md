# موقع معلم ديكورات جدة

موقع عربي من 6 صفحات مبني باستخدام Next.js وجاهز للرفع على Vercel.

## التشغيل المحلي

```bash
npm install
npm run dev
```

## النشر على Vercel
1. فك الضغط وارفع محتويات المجلد إلى مستودع GitHub جديد.
2. في Vercel اختر Add New Project ثم Import للمستودع.
3. اترك Framework Preset على Next.js واضغط Deploy.
4. بعد شراء الدومين: من Project Settings > Domains أضف الدومين واتبع تعليمات DNS التي تظهر لك.
5. عنوان الإنتاج الافتراضي هو `https://jeddah-decor-site.vercel.app`. عند ربط دومين مخصص، أضف متغير البيئة `NEXT_PUBLIC_SITE_URL` بقيمة الدومين مثل `https://yourdomain.com` ثم أعد النشر لتحديث الروابط الأساسية و sitemap والبيانات المنظمة.

تستخدم معاينات Vercel عنوان الإنتاج كرابط أساسي، وتُمنع من الفهرسة عبر `noindex` و`robots.txt`.

## الصور
ضع 40 صورة WebP في `public/images` بأسماء `decor01.webp` حتى `decor40.webp`. أماكن الصور تظهر بشكل أنيق دون صور مكسورة قبل إضافة الصور. راجع `public/images/README.txt` للتقسيم.

## التواصل
الهاتف والواتساب: 0566004551
إنستغرام: https://www.instagram.com/hmzhly1286
تعديل الأرقام أو الرابط أو الاسم من `lib/site.ts`.

## ملاحظات
- الخلفيات مرسومة بتقنيات CSS ولا تحتاج صورًا خارجية.
- لا يوجد نموذج لجمع بيانات الزوار أو مفاتيح سرية.
- لا توجد شهادة تحقق من التشغيل على Vercel قبل إجراء نشر فعلي.

## التحقق
- يكتمل `npm run build` مع توليد الصفحات الثابتة.
- يمكن فحص الأنواع باستخدام `npx tsc --noEmit`.
- يتم توليد `robots.txt` و`sitemap.xml` تلقائيًا من ملفات Next.js Route Handlers.
