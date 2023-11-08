import { useNavigate } from "react-router-dom";
import Button from "../../components/buttons/Button";
import { Helmet } from "react-helmet-async";

const BlogCard = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-primary border border-darker hover:border-brand-primary ease rounded p-6">
      <Helmet>
        <title>Blogs | Jobs</title>
      </Helmet>
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded overflow-hidden">
          <img src={data.image} />
        </div>
        <div className="flex justify-between flex-col items-start col-span-2">
          <div>
            <h2 className="heading-2">{data.title}</h2>
            <p className="text-light py-2">{data.description}</p>
          </div>
          <Button
            className={"!py-2 !px-4 rounded-3xl"}
            variant={"outline"}
            label={"View Details"}
            onClick={() => navigate(`/blogs/${data.href}`)}
          />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
