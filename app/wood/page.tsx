import type {Metadata} from "next";
import PageView from "../../components/PageView";
import {pages} from "../../lib/site";
const page=pages[2];
export const metadata:Metadata={title:page.title,description:page.lead,alternates:{canonical:"/wood"}};
export default function Page(){return <PageView page={page}/>}
