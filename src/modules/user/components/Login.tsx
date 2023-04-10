import { FormEvent, useState } from "react";
import MainLayout from "../../../common/layouts/MainLayout";
import { useUser } from "../hooks/useUser";

const Login = () => {
  const { isLogin } = useUser();

  const [username, setUsername] = useState<string>("");
  const onsubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    isLogin(username);
  };

  return (
    <>
      <form
        className="flex gap-3 border-2 p-3 flex-col items-center"
        onSubmit={onsubmit}
      >
        <h1 className="text-2xl">Log In</h1>
        <div>
          <input
            className="border-2"
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <button className="border-2 bg-slate-100 p-3" type="submit">
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
