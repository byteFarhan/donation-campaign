import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center content-center justify-center h-screen space-y-5 text-center">
      <h1 className="text-3xl font-bold">Ooops...</h1>
      <h1 className="text-xl font-semibold">404 - Not Found</h1>
      <p className="font-medium">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link to="/">
        <button className="btn text-white font-bold w-36 bg-[#009444] hover:bg-[#009400] delay-100 transition-colors">
          Go Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
