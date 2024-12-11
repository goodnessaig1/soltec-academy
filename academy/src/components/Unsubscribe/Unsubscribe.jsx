import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoadingFetching } from "../Admin/Courses/LoadingFetching";
import { apiRequest } from "../../Utils/ApiRequest";

const UnsubscribeSuccess = () => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);
  const { email } = useParams();

  const unsubscribe = async () => {
    try {
      const response = await apiRequest(
        "GET",
        `/newsletters/unsubscribe?email=${email}`
      );
      if (
        response &&
        response.includes("You have been successfully unsubscribed")
      ) {
        setSuccess(true);
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    unsubscribe();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      {!loading ? (
        <>
          {success ? (
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-2 max-w-md text-center">
              <div className="flex items-center w-full justify-center">
                <img
                  src="https://ik.imagekit.io/nz8zngrxv/amazon-image/Frame%20427321508%20(1)_cxCKbgN1B.png?updatedAt=1720067966697"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                Unsubscription Successful
              </h1>
              <p className="text-gray-600 mb-6">
                You have successfully unsubscribed from Soltec Academy. <br />
                You will no longer receive emails or updates about our courses
                and special offers. <br />
                If this was a mistake, feel free to subscribe again anytime.
              </p>
              <Link
                to={"/"}
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Return to Home
              </Link>
            </div>
          ) : (
            <div className="bg-white shadow-lg rounded-lg p-8 flex flex-col gap-2 max-w-md text-center">
              <div className="flex items-center w-full justify-center">
                <img
                  src="https://ik.imagekit.io/nz8zngrxv/amazon-image/Frame%20427321508%20(1)_cxCKbgN1B.png?updatedAt=1720067966697"
                  alt=""
                />
              </div>
              <h1 className="text-2xl font-bold text-gray-800 mb-4">
                You are not subscribed.
              </h1>
              <p className="text-gray-600 mb-6">
                This email does not exist on our subscribers, check the email
                and try again
              </p>
              <Link
                to={"/"}
                className="bg-blue-500 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
              >
                Return to Home
              </Link>
            </div>
          )}
        </>
      ) : (
        <LoadingFetching />
      )}
    </div>
  );
};

export default UnsubscribeSuccess;
