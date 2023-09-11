import { useEffect, useRef } from "react";
import { Post } from "../../../../../../types/post";
import ReactPlayer from 'react-player';



interface PostItemProps {
    post: Post;
  }

 
  // const recognition = new SpeechRecognition();
  // recognition.continous = true;
  // recognition.interimResults = true;
  // recognition.lang = 'en-US' ;
  
  

function PostVideo(props: PostItemProps) {
    const {post} = props;
    
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    
      
      
      const playerRef = useRef<ReactPlayer | null>(null);
      playerRef.current?.getInternalPlayer()?.playVideo();
      
      

      useEffect(() => {
       
      }, []);
         

    return (
        <div className=" text-justify w-full" >
          <h2  className="text-xl font-bold text-gray-800">{post.title}</h2>
           
          <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/embed/m2xjhq6Neo0?si=9RnBf9iNoi-ytww9"
          controls={true}
          width="640px"
          height="360px"
        />

           
        </div>
    );
}

export default PostVideo;