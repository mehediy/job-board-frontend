import { updateProfile } from "firebase/auth";
import { useCreateUserAccount } from "../../api/mutations";
import Input from "../../components/Forms/Input";
import Button from "../../components/buttons/Button";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../provider/AuthProvider";

const Signup = () => {
  const navigate = useNavigate();
  const {
    mutateAsync: createUser,
    isPending: creatingUser,
    isSuccess,
  } = useCreateUserAccount();

  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photoURL = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser({ email, password })
      .then(() => {
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        });
        toast.success("Account created");
        navigate("/");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="container mx-auto padding min-h-[500px]">
      <h1 className="heading-2 text-center pb-8">Signup</h1>
      <form className="max-w-sm w-full mx-auto" onSubmit={registerHandler}>
        <div className="space-y-4">
          <Input
            label={"Name"}
            type={"text"}
            name={"name"}
            placeholder={"Mehedi"}
          />
          <Input
            label={"Photo URL"}
            type={"text"}
            name={"photo"}
            placeholder={"http://localhost:5173/me.jpg"}
          />
          <Input
            label={"Email"}
            type={"email"}
            name={"email"}
            placeholder={"name@gmail.com"}
          />
          <Input
            label={"Password"}
            type={"password"}
            name={"password"}
            placeholder={"Enter password"}
          />
          <Button
            className={"w-full"}
            variant={creatingUser ? "disabled" : "accent"}
            label={creatingUser ? "Submitting" : "Submit"}
          />

          <Link className="block text-center" to={"/login"}>
            Already have an account? Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
