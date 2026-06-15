import { blogPosts } from "@/lib/content";
import { notFound } from "next/navigation";

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="prose dark:prose-invert">
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
