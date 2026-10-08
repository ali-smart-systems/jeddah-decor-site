import { site } from "../lib/site";
import { InstagramIcon, PhoneIcon, WhatsAppIcon, TikTokIcon } from "./Icons";
export default function FloatingContact() {
    return <aside className="floating" aria-label="طرق التواصل"><a className="float-btn whatsapp" href={`https://wa.me/${site.phoneInternational}`} target="_blank" rel="noopener noreferrer" aria-label="تواصل عبر واتساب" title="واتساب"><WhatsAppIcon /></a><a className="float-btn phone" href={`tel:+${site.phoneInternational}`} aria-label="اتصل الآن" title="اتصال"><PhoneIcon /></a><a className="float-btn instagram" href={site.instagram} target="_blank" rel="noopener noreferrer" aria-label="حساب إنستغرام" title="إنستغرام"><InstagramIcon /></a>
        <a
            className="float-btn tiktok"
            href="https://www.tiktok.com/@user5095887730342"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="حساب تيك توك"
            title="تيك توك"
        >
            <TikTokIcon />
        </a></aside>
}
