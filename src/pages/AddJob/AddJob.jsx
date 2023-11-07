import Input from "../../components/Forms/Input";
import Button from "../../components/buttons/Button";
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import Textarea from "../../components/Forms/Textarea";
import { categories } from "../../constants";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import { postJob } from "../../api/mutations";

const AddJob = () => {
  const { user } = useAuth();
  const email = user?.email;
  const {
    mutateAsync: addJob,
    isPending: addingJob,
    isSuccess,
    error,
  } = postJob();

  const [deadline, setDeadline] = useState(new Date());

  const addJobHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const banner = form.banner.value;
    const title = form.title.value;
    const user = form.user.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const applicants = 0;
    const date = new Date();

    const values = {
      banner,
      title,
      user,
      email,
      category,
      salary,
      description,
      applicants,
      date,
      deadline,
    };
    console.log(values);
    try {
      await addJob(values).then((res) => {
        if (res.data.insertedId) {
          toast.success("Job posted!");
        }
      });
    } catch {
      toast.error(error.message);
    }
  };

  return (
    <div className="container mx-auto padding min-h-[500px]">
      <h1 className="heading-2 text-center pb-8">Add a Job</h1>
      <form className="max-w-sm w-full mx-auto" onSubmit={addJobHandler}>
        <div className="space-y-4 w-full">
          <Input
            label={"Banner URL"}
            type={"text"}
            name={"banner"}
            placeholder={"http://localhost:5173/banner.jpg"}
          />
          <Input
            label={"Job Title"}
            type={"text"}
            name={"title"}
            placeholder={"Web Developer"}
          />
          <Input
            label={"User Name"}
            type={"text"}
            name={"user"}
            defaultValue={user?.displayName}
            disabled={true}
          />
          <label className="block text-sm font-medium text-primary">
            Category
            <select
              name="category"
              className="bg-dark border mt-2 mb-2 border-darker rounded-lg focus:ring-brand-primary focus:border-brand-primary w-full p-2.5"
              required
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
          />
          <Button
            className={"w-full"}
            variant={addingJob ? "disabled" : isSuccess ? "disabled" : "accent"}
            label={addingJob ? "Posting..." : isSuccess ? "Posted" : "Submit"}
          />
        </div>
      </form>
    </div>
  );
};

export default AddJob;
