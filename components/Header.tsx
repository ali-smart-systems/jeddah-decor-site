import Link from "next/link";
import {pages,site} from "../lib/site";
export default function Header(){return <header className="site-header"><div className="shell header-inner"><Link href="/" className="brand"><span className="brand-mark">✦</span><span>{site.brand}<small>لمسة فن • جودة تنفيذ</small></span></Link><nav aria-label="القائمة الرئيسية" className="nav">{pages.map(p=><Link key={p.slug} href={`/${p.slug}`}>{p.title}</Link>)}</nav><a className="header-cta" href={`https://wa.me/${site.phoneInternational}`}>اطلب استشارة <span>↗</span></a></div></header>}
