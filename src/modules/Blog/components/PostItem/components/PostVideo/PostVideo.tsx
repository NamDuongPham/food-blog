import { useEffect, useRef, useState } from "react";
import ReactPlayer from 'react-player';
import useSpeechRecognition from "../../../../../../hooks/useSpeechRecognitionHook";
import { Post } from "../../../../../../types/post";





interface PostItemProps {
    post: Post;
  }


function PostVideo(props: PostItemProps) {
    const {post} = props;
    
    
    const playerRef = useRef<ReactPlayer | null>(null);
    const [isListening, setIsListening] = useState(false);
     const batDau = ['bắt đầu', 'bát', 'bắt', 'bat', 'bất', 'bật', 'bật', 'bắt đâu', 'bắt đấu', 'đầu', 'đâu', 'đấu'];

     const tamDung = ['tạm dừng', 'Tạm dừng', 'tạm', 'Tạm', 'tam', 'tám', 'dừng', 'dưng', 'dung', 'tạm dụng', 'tàm dung', 'tam dụng', 'tám dung', 'tạm dung', 'tạm dưng', 'rừng']

    

    const {recognition} = useSpeechRecognition()
         
    useEffect(()=> {
      
      if(isListening == false) {
        recognition.start();
        setIsListening(isListening)
      }
      console.log(recognition)
      setTimeout(()=>{
        recognition.stop();
        // console.log("da tam dung")
      }, 3000)
    }, [])
      
    function xuly(text: string) {
      console.log(text);
      if(batDau.includes(text)) {
        playerRef.current?.getInternalPlayer()?.playVideo();
      }else {
        if(tamDung.includes(text)) {
          playerRef.current?.getInternalPlayer()?.pauseVideo();
        }
      }
    }  
    //@ts-ignore
      recognition.onresult = (event: SpeechRecognitionEvent) => {
        console.log("onresult event: ", event);
        // console.log(event.results[0][0].transcript)
        xuly(event.results[0][0].transcript)
      }

      recognition.onend = () => {
        recognition.start();
        setIsListening(true);
        setTimeout(() => {
            recognition.stop();
            setIsListening(false)
            // console.log("da tam dung")
        }, 3 * 1000);
         // Bắt đầu nhận dạng lại sau khi kết thúc
      };

      
      
         
      

    return (
        <div className=" text-justify w-full pl-3 pr-3" >
          <h2  className="text-xl font-bold text-gray-800">{post.title}</h2>
           
          <ReactPlayer
          ref={playerRef}
          url="https://www.youtube.com/embed/m2xjhq6Neo0?si=9RnBf9iNoi-ytww9"
          controls={true}
          width="100%"
          height="400px"
        />

           
        </div>
    );
}

export default PostVideo;