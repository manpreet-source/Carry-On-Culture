import { notFound } from "next/navigation";
import { EditorialPost } from "@/components/editorial-post";
import { getPost, getPosts } from "@/lib/content";

export function generateStaticParams() { return getPosts("packing-guide").map((post) => ({ slug: post.slug })); }
export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = getPost("packing-guide", slug); if (!post) notFound(); return <EditorialPost post={post} />; }
