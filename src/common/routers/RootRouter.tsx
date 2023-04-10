import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Home from "../pages/Home";
import PostsRouter from "../../modules/posts/routers/PostsRouter";
import UserRouter from "../../modules/user/routers/UserRouter";

const RootRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="posts/*" element={<PostsRouter />} />
        <Route path="user/*" element={<UserRouter />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
