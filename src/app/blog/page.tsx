import Link from "next/link";

export default function BlogIndex() {
  const posts = [
    {
      title: "Stella Bridge App — Building a School's Complete Digital Operating System",
      tags: ["React Native", "Node.js", "MongoDB", "Case Study"],
      date: "2026",
      excerpt:
        "How I replaced WhatsApp groups and physical notebooks with a 35-screen mobile app serving students, teachers, and admins at Stella Maris School.",
      link: "/blog/stella-bridge",
      badge: "DELIVERED TO CLIENT",
      status: "published",
    },
    {
      title: "DocuCompare — Automating Document Comparison with n8n and FastAPI",
      tags: ["n8n", "FastAPI", "Automation", "Case Study"],
      date: "Coming soon",
      excerpt:
        "A client needed to compare hundreds of structured documents automatically. Here's how I built an automation pipeline that did it in seconds.",
      link: "#",
      badge: "DELIVERED TO CLIENT",
      status: "draft",
    },
  ];

  return (
    <main className="min-h-screen pt-32 pb-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <Link
            href="/"
            className="font-mono text-sm text-gray-500 hover:text-[var(--color-neon-cyan)] transition-colors mb-6 inline-block"
          >
            ← Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Case Studies & Writing
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
            A behind-the-scenes look at the projects I've built — the problems,
            the decisions, and the outcomes.
          </p>
        </div>

        <div className="space-y-8">
          {posts.map((post, index) => {
            const isDraft = post.status === "draft";

            const baseClass = `block bg-[#111111] border border-[#1e1e1e] p-8 relative rounded-sm transition-all duration-300 ${
              isDraft
                ? "opacity-50 cursor-default"
                : "hover:border-[rgba(0,229,255,0.3)] hover:-translate-y-1 cursor-pointer"
            }`;

            const content = (
              <>
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-4">
                  {post.badge && (
                    <div className="inline-block px-3 py-1 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-xs font-mono font-bold w-max rounded">
                      {post.badge}
                    </div>
                  )}
                  <div className="font-mono text-xs text-gray-500">
                    {post.date}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-4 leading-snug">
                  {post.title}
                </h2>

                <p className="text-gray-400 mb-6 leading-relaxed text-[15px]">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-black border border-white/10 text-xs font-mono text-gray-400 rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            );

            return isDraft ? (
              <div key={index} className={baseClass}>
                {content}
              </div>
            ) : (
              <Link key={index} href={post.link} className={baseClass}>
                {content}
              </Link>
            );
          })}
        </div>
      </div>
    </main>
  );
}