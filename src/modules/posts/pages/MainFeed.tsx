import MainLayout from "../../../common/layouts/MainLayout";
import usePosts from "../hooks/usePosts";
import Post from "../components/Post";

const MainFeed = () => {
  const posts = usePosts();
  const renderPosts = () => {
    return posts.map((post) => {
      return <Post key={post.id} post={post} />;
    });
  };

  return (
    <MainLayout>
      <div className="flex flex-col gap-3 items-center">
        <h1>All Posts</h1>
        <div className="flex gap-5">{renderPosts()}</div>
      </div>
    </MainLayout>
  );
};

export default MainFeed;
