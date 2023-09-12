


let recognition: any= null;
if("webkitSpeechRecognition" in window) {
    //@ts-ignore
    recognition = new webkitSpeechRecognition();
recognition.continuous = true;
recognition.lang = "vi"
}

const useSpeechRecognition = () => {
    // const [text, setText] = useState("");
    // const [isListening, setIsListening] = useState(false);

    // useEffect(()=> {
    //     if(!recognition) return;
    //     recognition.onresult = (event: SpeechRecognitionEvent) => {
    //         console.log("onresult event: ", event);
    //         setText(event.results[0][0].transcript)
    //         recognition.stop();
    //         setIsListening(false);
    //     }
    // }, []);

    // const startListening = () => {
    //     if(isListening == false) {
    //         setText("");
    //         setIsListening(true);
    //         recognition.start();
            
    //     }
        
      
          
    // }

    // const stopListening = () => {
    //     setIsListening(false);
    //     recognition.stop();
    // }
    
    return {
        recognition,
        // text,
        // isListening,
        // startListening,
        // stopListening,
        // hasRecognitionSupport: !!recognition,
    }

};

export default useSpeechRecognition;