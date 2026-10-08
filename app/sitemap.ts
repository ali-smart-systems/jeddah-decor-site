import type {MetadataRoute} from "next";
import {site,pages} from "../lib/site";
export default function sitemap():MetadataRoute.Sitemap{return pages.map(p=>({url:`${site.domain}/${p.slug}`,changeFrequency:"monthly",priority:p.slug?0.7:1}))}
