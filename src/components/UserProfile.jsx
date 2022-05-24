import { postWithToken } from "../api";

const UserProfile = () => {
  const MyApplications = () => {
    postWithToken("/api/jobs/me")
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <button
        className="rounded-md bg-red-400 hover:bg-red-800 text-white font-bold py-2 px-3"
        onClick={MyApplications}
      >
        My applications
      </button>
    </>
  );
};

export { UserProfile };
