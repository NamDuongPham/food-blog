import { SetStateAction, useState } from "react";
import { useGetUsersQuery } from "../../../../services/userService";
import { AiOutlineLike } from "react-icons/ai";
import { FaRegCommentAlt } from "react-icons/fa";
import { BsShare } from "react-icons/bs";
import { Post } from "../../../../types/post";
import PostContent from "./components/PostContent/PostContent";
import PostVideo from "./components/PostVideo/PostVideo";
import PostMore from "./components/PostMore/PostMore";

interface PostItemProps {
  post: Post;
}

export default function PostItem(props: PostItemProps) {
  const { post } = props;
  const [content, setContent] = useState("Post");

  const { data: users } = useGetUsersQuery();

  const changeContent = (bine: SetStateAction<string>) => {
    setContent(bine);
  };

  const user = users?.find((user) => user.id == post.userId);
  return (
    <div className=" border-2 border-gray-300 border-solid w-6/12 m-auto  rounded-md">
      <div className="flex p-2 ">
        <div className="flex items-center gap-3">
          <img className="w-[40px] rounded-full" src={user?.avatar} alt="" />
          <h3 className="text-center font-semibold">{user?.name}</h3>
        </div>
        <div className="">
          <button onClick={() => changeContent("Post")}>Post</button>
          <button onClick={() => changeContent("Video")}>Video</button>
          <button onClick={() => changeContent("more")}>More</button>
        </div>
      </div>
      {/* Post */}
      {content == "Post" && <PostContent key={post.id} post={post} />}
      {content == "Video" && <PostVideo post={post} />}
      {content == "more" && <PostMore post={post} />}
      <div className="flex justify-between justify-center ml-6 mr-6 mt-1 mb-3">
        <div className="flex items-end space-x-1 cursor-pointer">
          <AiOutlineLike className="w-5 h-5" />
          <span className="text-gray-600">Like</span>
        </div>
        <div className="flex items-end space-x-1 cursor-pointer mt-2">
          <FaRegCommentAlt className="w-4 h-4" />
          <span className="text-gray-600">Comment</span>
        </div>
        <div className="flex items-end space-x-1 cursor-pointer mt-2">
          <BsShare className="w-4 h-4" />
          <span className="text-gray-600">Share</span>
        </div>
      </div>
    </div>
  );
}
