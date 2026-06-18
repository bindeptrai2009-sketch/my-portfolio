import Link from "next/link";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../components/ui/card";

export default function Home() {
  // --- Placeholder dữ liệu dự án (bạn thay bằng dự án thật sau này) ---
  const projects = [
    {
      title: "Blog Series Website",
      description: "My personal blog with 10+ posts on technology.",
      tags: ["Next.js", "Tailwind", "Vercel"],
      href: "/blog",
    },
    {
      title: "Interactive UI Library",
      description: "A small collection of reusable React components.",
      tags: ["React", "shadcn/ui", "DaisyUI"],
      href: "#",
    },
    {
      title: "AI Chat Assistant",
      description: "A chat application powered by OpenAI models.",
      tags: ["Python", "Streamlit", "GPT-4"],
      href: "#",
    },
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-16">
      {/* 🚀 Hero Section */}
      <section className="text-center py-12 md:py-16">
        <div className="max-w-2xl mx-auto flex flex-col gap-6">
          <h1 className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tight leading-tight">
            Hi, I'm <span className="text-primary">Bindeprai2009</span>.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            I build modern, high-performance web applications. Welcome to my personal portfolio and blog.
          </p>
          <div className="flex flex-wrap gap-4 items-center justify-center pt-2">
            <Button size="lg" asChild>
              <Link href="/blog">View Blog Posts</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 💼 Projects Section */}
      <section className="flex flex-col gap-10">
        <div className="text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl tracking-tight">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground pt-3 max-w-2xl mx-auto">
            A small selection of things I've been working on.
          </p>
        </div>
        
        {/* Project Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pt-4">
          {projects.map((project, index) => (
            <Link href={project.href} key={index} className="group">
              <Card className="h-full transition-all group-hover:shadow-lg group-hover:-translate-y-1">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 pb-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono font-medium text-primary-foreground bg-primary/90 px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <CardTitle className="font-bold text-2xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground pt-1">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm font-medium text-primary transition-colors flex items-center gap-1.5 group-hover:gap-2">
                    Learn more →
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}