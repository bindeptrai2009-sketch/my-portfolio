import { blogPosts } from "@/lib/content";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);
  
  if (!post) notFound();

  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p className="whitespace-pre-wrap">{post.content}</p>
    </article>
  );
}