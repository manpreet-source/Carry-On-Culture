import { notFound } from "next/navigation";
import { EditorialPost } from "@/components/editorial-post";
import { getPost, getPosts } from "@/lib/content";

export function generateStaticParams() { return getPosts("product-review").map((post) => ({ slug: post.slug })); }
export default async function ReviewPage({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const post = getPost("product-review", slug); if (!post) notFound(); return <EditorialPost post={post} />; }
