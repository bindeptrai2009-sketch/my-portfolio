import { blogPosts } from "@/lib/content";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = blogPosts.find((p) => p.slug === resolvedParams.slug);

  if (!post) notFound();

  return (
    <article className="prose dark:prose-invert max-w-2xl mx-auto py-8">
      {/* Blog Post Header */}
      <div className="border-b pb-12 mb-10 flex flex-col gap-6 text-center">
        <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight !mb-2">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-sm text-muted-foreground justify-center">
          <Badge variant="secondary" className="px-3 py-1 font-medium rounded-full">
            Blog Post
          </Badge>
          <time dateTime="2026-06-17">June 17, 2026</time>
          <span>• 5 min read</span>
        </div>
      </div>

      {/* Blog Content */}
      <p className="whitespace-pre-wrap leading-relaxed text-base">
        {post.content}
      </p>
    </article>
  );
}