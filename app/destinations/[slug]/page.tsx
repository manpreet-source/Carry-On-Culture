import { notFound } from "next/navigation";
import { EditorialPost } from "@/components/editorial-post";
import { getPost, getPosts } from "@/lib/content";

export function generateStaticParams() { return getPosts("shopping-edit").map((post) => ({ slug: post.slug })); }
export default async function DestinationEditPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = getPost("shopping-edit", slug); if (!post) notFound(); return <EditorialPost post={post} />; }
