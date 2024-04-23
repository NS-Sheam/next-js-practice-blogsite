import BlogDetails from "@/components/ui/BlogDetails";
import React from "react";

interface BlogId {
  params: {
    blogId: string;
  };
}

const BlogDetailsPage = async ({ params }: BlogId) => {
  const res = await fetch(`http://localhost:5000/blogs/${params.blogId}`, {
    cache: "no-store",
  });
  const blog = await res.json();

  return (
    <div className="my-10">
      <BlogDetails blog={blog} />
    </div>
  );
};

export default BlogDetailsPage;
