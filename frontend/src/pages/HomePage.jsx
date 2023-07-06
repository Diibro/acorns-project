import BackVid from "../assets/videos/Home_Vid.mp4";
import VidPic from "../assets/videos/vid-back.jpg";

const HomePage = () => {
  return (
    <div className="Home">
     <div className="sec-1">
          <div className="back">
               <video autoPlay loop muted >
                    <source src={BackVid} />
               </video>
          </div>
          <div className="content">
               <h2>Welcome to Acorns Consultancy</h2>
          </div>
     </div>
    </div>
  )
}

export default HomePage