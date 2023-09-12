import { Post } from "../../../../../../types/post";
import useSpeechRecognition from "../../../../../../hooks/useSpeechRecognitionHook";

interface PostItem {
    post: Post;
  }

function PostContent(props:  PostItem) {

    const {post} = props
    const {recognition} = useSpeechRecognition()
    recognition.stop();  
    recognition.onend = () => {
      recognition.stop();
    };
    return (
        <div>
            <div
            className="items-center justify-center text-justify"
          >
            <div className="m-2">
              <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
              <p className=" line-clamp-3" >{post.body}
              </p>
              <span className="font-semibold cursor-pointer hover:underline">More</span>
            </div>
            <div className="w-full">
              <img className="w-full h-96 object-contain " src={post.photos[0].url}  loading="lazy" alt="img" />
            </div>
          </div>
        </div>
    );
}

export default PostContent;