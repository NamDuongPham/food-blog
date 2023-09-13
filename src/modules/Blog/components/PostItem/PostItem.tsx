import { SetStateAction, useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BsShare } from "react-icons/bs";
import { FaRegCommentAlt } from "react-icons/fa";
import { useGetUsersQuery } from "../../../../services/userService";
import { Post } from "../../../../types/post";
import { IUser } from "../../../../types/user";
import PostContent from "./components/PostContent/PostContent";
import PostMore from "./components/PostMore/PostMore";
import PostVideo from "./components/PostVideo/PostVideo";

interface PostItemProps {
  post: Post;
}

export default function PostItem(props: PostItemProps) {
  const { post } = props;
  const [content, setContent] = useState("Post");
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  const [showComments, setShowComments] = useState(false);

  const handleLikeClick = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };
  const handleCommentClick = () => {
    setShowComments(!showComments);
  };
  const changeContent = (bine: SetStateAction<string>) => {
    setContent(bine);
  };
  const { data: users } = useGetUsersQuery();
  const user = users?.find((user: IUser) => user.id == post.userId);
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
      <div className="flex justify-between  ml-6 mr-6 mt-1 mb-3">
        <div
          className="flex items-end space-x-1 cursor-pointer"
          onClick={handleLikeClick}
        >
          {isLiked ? (
            <AiFillLike className="w-5 h-5 text-blue-500" />
          ) : (
            <AiOutlineLike className="w-5 h-5" />
          )}
          <span>{likes}</span>
          <span className="text-gray-600">Like</span>
        </div>
        <div
          className="flex items-end space-x-1 cursor-pointer mt-2"
          onClick={handleCommentClick}
        >
          <FaRegCommentAlt className="w-4 h-4" />
          <span>{post.comments.length}</span>
          <span className="text-gray-600">Comment</span>
        </div>

        <div className="flex items-end space-x-1 cursor-pointer mt-2">
          <BsShare className="w-4 h-4" />
          <span>{post.shares}</span>
          <span className="text-gray-600">Share</span>
        </div>
      </div>
      {showComments &&
        post.comments.map((comment: any) => (
          <div key={comment.id} className="flex flex-col ml-6 my-2">
            <span>{comment.text}</span>
          </div>
        ))}
    </div>
  );
}
