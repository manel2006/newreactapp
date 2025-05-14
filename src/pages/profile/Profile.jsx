import "./profile.css"

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Rightbar from "../../components/rightbar/Rightbar"
import Feed from "../../components/feed/Feed";

export default function Profile() {
  return (
    <>
    
    <Topbar/>
    <div className="profile">
    <Sidebar />
    <div className="profileRight">
        <div className="profileRightTop">
<div className="profileCover">
    <img  className="profileCoverImg"   src="https://i.postimg.cc/nhXZsppP/photo-2025-05-13-02-48-27.jpg" alt="" />
<img  className="profileUserImg"  src="https://i.postimg.cc/XqVXm6kT/photo-2025-05-11-04-18-09.jpg" alt="" />


</div>
<div className="profileInfo">
<h4 className="profileInfoName">Manel & Cerine</h4>
<span className="profileInfDesc"> hello my friends!</span>


</div>


        </div>
        <div className="profileRightBottom"> 
        <Feed/>
        <Rightbar profile/>
        </div>
    
    </div>
    
    </div>
    </>
  )
}
