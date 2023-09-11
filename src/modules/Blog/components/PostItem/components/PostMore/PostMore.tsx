import { Post } from "../../../../../../types/post";


interface PostItemProps {
    post: Post;
}

function PostMore(props: PostItemProps) {
    const {post} = props
    return (
        <div className="items-center justify-center text-justify">
          <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
          <div>
          {post.timer.map((time, index) => {
            return (
                <div key={index}>
                    <span>Bước {index+1}: {post.timerDesc[index]} <button>{time}</button></span>
                </div>
            )}
            
            )}
          
          </div>
        </div>
    );
}

export default PostMore;