import Button from "../../components/buttons/Button";

const Login = () => {
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div className="container mx-auto padding min-h-[500px]">
      <h1 className="heading-2 text-center pb-8">Login</h1>
      <form className="max-w-sm w-full mx-auto" onSubmit={loginHandler}>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-dark border border-darker text-primary text-sm rounded-lg focus:ring-brand-primary focus:border-brand-primary block w-full p-2.5"
            placeholder="name@gmail.com"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-primary"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-dark border border-darker text-primary text-sm rounded-lg focus:ring-brand-primary focus:border-brand-primary block w-full p-2.5"
            placeholder="***"
            required
          />
        </div>
        <Button className={"w-full"} variant={"accent"} label={"Login"} />
      </form>
    </div>
  );
};

export default Login;
