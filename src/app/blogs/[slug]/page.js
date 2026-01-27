import { notFound } from "next/navigation";
import { blogs } from "@/data/blogs";
import Image from "next/image";

export function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

async function BlogDetails({ params }) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return notFound();

  return (
    <div className="max-w-screen-2xl lg:w-3/4 w-full mx-auto my-20">
      <div className="px-4 lg:px-10 py-5">
        <Image
          src={blog.coverImage}
          alt={blog.title}
          width={600}
          height={400}
          className="w-full rounded-xl h-96 object-cover shadow mb-6"
        />

        <div className="flex flex-wrap gap-8 mb-8 text-sm text-lightText">
          <p>
            <span className="font-medium">Author:</span> {blog.author}
          </p>
          <p>
            <span className="font-medium">Date:</span> {blog.publishedAt}
          </p>
        </div>

        <article
          className="
        prose max-w-none 
        prose-p:my-3 prose-li:my-1 prose-img:my-4
        prose-headings:mt-6 prose-headings:mb-3
        text-[15.5px] leading-relaxed
      "
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </div>
    </div>
  );
}

export default BlogDetails;
