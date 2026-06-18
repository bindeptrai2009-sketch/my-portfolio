import { blogPosts } from "@/lib/content";
import Link from "next/link";
import { Button } from "../../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../components/ui/card";
export default function BlogList() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Blog của tôi</h1>
      {blogPosts.map((post) => (
        <Link key={post.slug} href={`/blog/${post.slug}`} className="block p-4 border rounded hover:bg-gray-100">
          <h2 className="font-semibold">{post.title}</h2>
          <p className="text-sm text-gray-500">{post.date}</p>
        </Link>
      ))}
    </div>
  );
}