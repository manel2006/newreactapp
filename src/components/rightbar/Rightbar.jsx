import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";


export default function Rightbar({profile}) {
const  HomeRightbar =()=>{
  return(

    <>
    <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="https://i.postimg.cc/Fs8mZmXL/R.png"
            alt=""
          />
          <span className="birthdayText">
            <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today.
          </span>
        </div>
        <img
          className="rightbarAd"
          src="https://i.postimg.cc/7Zs5khcQ/photo-2025-05-10-15-11-42.jpg"
          alt=""
        />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
    
    
    </>
  )
} 
const ProfileRightbar = () =>{
return(
  <>
  <h4 className="rightbarTitle">User Information</h4>
  <div className="rightbarInfo">
    <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">City:</span>
    <span className="rightbarInfoValue">Algiers</span>


    </div>

    <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">From:</span>
    <span className="rightbarInfoValue">Algeria</span>
          

    </div> <div className="rightbarInfoItem">
    <span className="rightbarInfoKey">Profession:</span>
    <span className="rightbarInfoValue">Students</span>
          

    </div>

  </div>

  <h4 className="rightbarTitle">User friends</h4>
  <div className="rightbarFollowings">
    <div className="rightbarFollowing">
      <img src="https://i.postimg.cc/rmKYjFZB/photo-2025-05-10-22-05-26.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Maryam Alya</span>
    </div>


    <div className="rightbarFollowing">
      <img src="https://i.postimg.cc/rs4Z6Zkg/photo-2025-05-10-22-05-48.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Maryam Alya</span>
    </div>


    <div className="rightbarFollowing">
      <img src="https://i.postimg.cc/vHW23KXZ/photo-2025-05-10-22-05-31.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Maryam Alya</span>
    </div>
    
    
    <div className="rightbarFollowing">
      <img src="https://i.postimg.cc/Qdh4Pqnk/photo-2025-05-10-22-05-53.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Maryam Alya</span>
    </div>


    <div className="rightbarFollowing">
      <img src="https://i.postimg.cc/pTwkBQFj/photo-2025-05-10-22-05-40.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Maryam Alya</span>
    </div>



    <div className="rightbarFollowing">
      <img src="https://i.postimg.cc/hvVsZJL5/photo-2025-05-10-22-05-57.jpg" alt="" className="rightbarFollowingImg" />
    <span className="rightbarFollowingName">Maryam Alya</span>
    </div>




  </div>


  
  </>
)




}
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  );
}