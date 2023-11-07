import React from "react";
import { Link } from "react-router-dom";
import { error404 } from "../../assets/images";
import Button from "../../components/buttons/Button";

const ErrorPage = () => {
  return (
    <div className="container mx-auto padding">
      <div className="flex flex-col items-center justify-center h-screen gap-4">
        <img src={error404} />
        <Link to={"/"}>
          <Button variant={"accent"} label={"Go Back Home"} />
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
