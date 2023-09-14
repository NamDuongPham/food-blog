import { Post } from "../../../../../../types/post";
import useSpeechRecognition from "../../../../../../hooks/useSpeechRecognitionHook";
import { useGetProductsQuery } from "../../../../../../services/productService";


interface PostItemProps {
    post: Post;
}

function PostMore(props: PostItemProps) {
    const {post} = props
    const {recognition} = useSpeechRecognition()

    const { data} = useGetProductsQuery()
    console.log(data);

    recognition.stop();  
    recognition.onend = () => {
      recognition.stop();
    };
    let check = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function xulyHenH(event: any) {
        check = !check;
        
            let time = parseInt(event.target.innerText) * 60*1000;
            let timeUI = parseInt(event.target.innerText) * 60;
            let phut, giay;
            giay =1;
            console.log(time)
            // let timeT = 3000;
            const chay = setInterval(function() {
                time = time-1000;
                timeUI--;
                phut = Math.floor(timeUI/60);
                giay = (timeUI%60);
                event.target.innerText = `${phut}:${giay} `;
                // console.log(phut+ ':' + giay)
                if (time <= 0) {
                    clearInterval(chay);
                    const audioContext = new (window.AudioContext || window.AudioContext)();
                    const oscillator = audioContext.createOscillator();
                    oscillator.type = 'square';
                    oscillator.frequency.value = 500; // Tần số của âm thanh bịp
                  
                    oscillator.connect(audioContext.destination);
                    oscillator.start();
                    setTimeout(() => {
                        oscillator.stop();
                      }, 1000);
                    
                     console.log("het gio");
                  }
                
            }, 1000)

            if(check == true) {
                clearInterval(chay)
              }
              
       
    }

    
    
    return (
        <div className=" ml-2 items-center justify-center text-justify mr-2">
          <h2 className="text-xl font-bold text-gray-800">{post.title}</h2>
          <div className="ml-10">
          {post.timer.map((time, index) => {
            return (
                <div key={index} className="mb-2">
                    <span>Bước {index+1}: {post.timerDesc[index]} <button onClick={xulyHenH}  id={`time${post.id}-${index}`} className="bg-blue-700 p-2 pl-5 pr-5 text-white">{time}</button></span>
                </div>
            )}
            
            )}
          
          </div>
          <div className="m-auto text-center">
            <h3 className="text-xl font-bold text-gray-800">Related products</h3>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {data?.map(product => {
              if(product.postId == parseInt(post.id)) {
                return (
                  <div key={product.id} className="bg-white rounded-lg shadow-md p-4 border-2 border-gray-300 border-solid cursor-pointer hover:bg-orange-200">
                    <div className="w-full">
                    <img src={product.img} alt={product.name} className="w-full h-32 object-contain mx-auto mb-4 " /> 
                    </div>
                    
                    <div>
                    <h3 className="text-lg font-semibold">{product.name}</h3>
                    <p className="text-red-600">${product.price}</p>
                    <button className="text-red-600 mt-3">Buy</button>
                    </div>
                   </div>
                )
              }
              
            })}
          </div>
        </div>
    );
}

export default PostMore;