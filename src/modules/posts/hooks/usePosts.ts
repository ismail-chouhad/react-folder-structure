import { useEffect, useState } from "react";
import { PostType } from "../types/postType";
import { UserType } from "../../user/types/userType";

const usePosts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  const fechPosts = async () => {
    const postsRes = await fetch("/posts.json");
    const postsData = (await postsRes.json()) as PostType[];

    const usersRes = await fetch("/users.json");
    const usersData = (await usersRes.json()) as UserType[];

    postsData.forEach((post) => {
      const matchingUser = usersData.find((user) => user.id === post.userId);
      if (matchingUser) {
        post.user = matchingUser;
      }
    });

    setPosts(postsData);
  };

  useEffect(() => {
    console.log("mounted");
    fechPosts();
  }, []);

  return posts;
};

export default usePosts;
