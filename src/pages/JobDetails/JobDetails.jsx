import { useParams } from "react-router-dom";
import { getJob } from "../../api/jobs";
import Spinner from "../../components/loader/Spinner";
import Button from "../../components/buttons/Button";
import { peopleIcon } from "../../assets/icons";
import useAuth from "../../hooks/useAuth";
import { useApplyJob } from "../../api/mutations";
import toast from "react-hot-toast";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Input from "../../components/Forms/Input";
import { useState } from "react";

const JobDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const email = user?.email;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    mutateAsync: applyJob,
    isPending: applyingJob,
    isSuccess,
    error: applyError,
  } = useApplyJob();

  const { data: job, isPending, isError, error, refetch } = getJob(id);

  const [resume, setResume] = useState("");
  const jobApplyHandler = async () => {
    const values = {
      job_id: id,
      email: email,
      title: job?.data?.title,
      user: job?.data?.user,
      salary: job?.data?.salary,
      category: job?.data?.category,
      deadline: job?.data?.deadline,
      resume,
    };

    if (resume.length < 1) {
      toast.error("Enter resume");
      return;
    }

    if (job?.data?.email === email) {
      toast.error("Cannot apply to your own job");
      return;
    }

    if (new Date(job?.data?.deadline) - new Date() < 0) {
      toast.error("Deadline over");
      return;
    }

    try {
      await applyJob(values)
        .then((res) => {
          if (res.data.insertedId) {
            toast.success("Job applied!");
            refetch();
          }
        })
        .catch((error) => toast.error(error.response.data.message));
    } catch {
      toast.error("Something is wrong");
    }
  };

  return (
    <div className="container mx-auto min-h-screen">
      {isPending ? (
        <div className="h-screen">
          <Spinner />
        </div>
      ) : (
        <>
          {/* Banner */}
          <div className="h-[200px] md:h-[400px] xl:h-[450px] px-0 md:px-4">
            <img
              className="w-full h-full object-cover"
              src={job?.data?.banner}
            />
          </div>

          {/* Details */}
          <div className="padding space-y-4 max-w-5xl mx-auto">
            {/* Heading */}
            <div className="flex gap-4 flex-col md:flex-row justify-between items-center md:items-start flex-1">
              <div className="flex gap-4 flex-col md:flex-row items-center md:items-start">
                <div className="bg-slate-200 w-[64px] h-[64px]">
                  {user?.photoURL && <img src={user?.photoURL} />}
                </div>
                <div className="flex flex-col items-center md:items-start">
                  <p className="text-brand-primary font-semibold">
                    {job?.data?.user}
                  </p>
                  <h1 className="heading-2">{job?.data?.title}</h1>
                  <p className="text-light flex items-center gap-2 mt-4">
                    <img src={peopleIcon} />
                    Applicants: {job?.data?.applicants}
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center md:items-end gap-4">
                <Button
                  variant={"accent"}
                  label={"Apply Now"}
                  // onClick={jobApplyHandler}
                  onClick={onOpen}
                />

                <p className="text-lg font-semibold">
                  Salary: {job?.data?.salary}
                </p>
              </div>
            </div>
            <div className="border-b-2 border-dark mt-4 mb-2"></div>
            {/* End Heading */}
            {/* Description */}
            <div>
              <h2 className="heading-2 pb-2">Description</h2>
              <p className="text-light">{job?.data?.description}</p>
            </div>
          </div>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Apply Job</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Input
                  label={"User Name"}
                  type={"text"}
                  name={"user"}
                  defaultValue={job?.data?.user}
                  disabled={true}
                />
                <Input
                  onChange={(e) => setResume(e.target.value)}
                  label={"Resume Link"}
                  type={"text"}
                  placeholder={"Resume link"}
                  name={"resume"}
                />
              </ModalBody>

              <ModalFooter className="space-x-2">
                <Button
                  variant={applyingJob || isSuccess ? "disabled" : "accent"}
                  label={
                    applyingJob ? "Applying" : isSuccess ? "Applied" : "Apply"
                  }
                  onClick={jobApplyHandler}
                />
                <Button variant={"outline"} label={"Close"} onClick={onClose} />
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      )}
    </div>
  );
};

export default JobDetails;
