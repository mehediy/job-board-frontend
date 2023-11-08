import Input from "../../components/Forms/Input";
import Button from "../../components/buttons/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Textarea from "../../components/Forms/Textarea";
import { categories } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useEffect, useState } from "react";
import { useUpdateJob } from "../../api/mutations";
import { getJob } from "../../api/jobs";
import { useParams } from "react-router-dom";
import Spinner from "../../components/loader/Spinner";
import { Helmet } from "react-helmet-async";

const UpdateJob = () => {
  const { id } = useParams();
  const { data: job, isPending, isError, error } = getJob(id);

  const {
    mutateAsync: updateJob,
    isPending: updatingJob,
    isSuccess,
    error: updateError,
  } = useUpdateJob();

  const [deadline, setDeadline] = useState(new Date());
  useEffect(() => {
    if (job?.data?.deadline) {
      const newDeadline = new Date(job.data.deadline);
      setDeadline(newDeadline);
    }
  }, [job]);

  const updateJobHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const banner = form.banner.value;
    const title = form.title.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const description = form.description.value;

    const values = {
      banner,
      title,
      category,
      salary,
      description,
      deadline,
    };
    try {
      await updateJob({ id, values }).then((res) => {
        console.log(res);
        if (res.data.modifiedCount > 0) {
          toast.success("Job updated!");
        }
      });
    } catch {
      toast.error(updateError.message);
    }
  };

  return (
    <div className="container mx-auto padding min-h-[500px]">
      <Helmet>
        <title>Update Jobs | Jobs</title>
      </Helmet>
      <h1 className="heading-2 text-center pb-8">Update Job</h1>
      {isPending ? (
        <Spinner />
      ) : (
        <form className="max-w-sm w-full mx-auto" onSubmit={updateJobHandler}>
          <div className="space-y-4 w-full">
            <Input
              label={"Banner URL"}
              type={"text"}
              name={"banner"}
              placeholder={"http://localhost:5173/banner.jpg"}
              defaultValue={job?.data?.banner}
            />
            <Input
              label={"Job Title"}
              type={"text"}
              name={"title"}
              placeholder={"Web Developer"}
              defaultValue={job?.data?.title}
            />
            <Input
              label={"User Name"}
              type={"text"}
              name={"user"}
              defaultValue={job?.data?.user}
              disabled={true}
            />
            <label className="block text-sm font-medium text-primary">
              Category
              <select
                name="category"
                className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5"
                required
                defaultValue={job?.data?.category}
              >
                {categories.map((item) => (
                  <option key={item.label} value={item.label}>
                    {item.label}
                  </option>
                ))}
              </select>
            </label>
            <Input
              label={"Salary range"}
              type={"text"}
              name={"salary"}
              placeholder={"10,000-20,000"}
              defaultValue={job?.data?.salary}
            />
            <div>
              <label className="text-sm">Deadline</label>
              <div className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5">
                <DatePicker
                  dateFormat="MMMM d, yyyy"
                  className="bg-transparent w-full"
                  selected={deadline}
                  onChange={(date) => setDeadline(date)}
                />
              </div>
            </div>
            <Textarea
              label={"Description"}
              name={"description"}
              placeholder={"Description"}
              defaultValue={job?.data?.description}
            />
            <Button
              className={"w-full"}
              variant={
                updatingJob ? "disabled" : isSuccess ? "disabled" : "accent"
              }
              label={
                updatingJob ? "Posting..." : isSuccess ? "Updated" : "Submit"
              }
            />
          </div>
        </form>
      )}
      {isError && <>{toast.error(error.message)}</>}
    </div>
  );
};

export default UpdateJob;
