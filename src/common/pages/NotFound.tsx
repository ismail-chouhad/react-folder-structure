import { useNavigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      <main className="flex flex-col items-center">
        <h3 className="text-rose-400 font-bold text-5xl">Not Found 404</h3>
        <div>
          <button
            className="bg-rose-400 hover:bg-rose-500 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate("/")}
          >
            Go Home
          </button>
        </div>
      </main>
    </MainLayout>
  );
};

export default NotFound;
