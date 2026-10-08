import type {MetadataRoute} from "next";
import {isVercelPreview,site} from "../lib/site";
export default function robots():MetadataRoute.Robots{
  if (isVercelPreview) return {rules:{userAgent:"*",disallow:"/"}};
  return {rules:{userAgent:"*",allow:"/"},sitemap:`${site.domain}/sitemap.xml`};
}
