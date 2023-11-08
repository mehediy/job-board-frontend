import { blogdata } from "../../constants";
import BlogCard from "./BlogCard";

const Blogs = () => {
  return (
    <div className="padding max-w-6xl mx-auto space-y-4">
      {blogdata.map((item, idx) => (
        <BlogCard key={idx} data={item} />
      ))}
    </div>
  );
};

export default Blogs;
