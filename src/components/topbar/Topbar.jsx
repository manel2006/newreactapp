import "./topbar.css";
import{Search,Person,Chat,Notifications} from "@mui/icons-material"

export default function Topbar() {
    return(       

   <div  className="topbarContainer">
    <span className="logo">Novasocial</span>


    <div  className="topbarLeft"></div>
<div  className="topbarCenter"></div>
<div className="searchbar">
    <Search className="searchIcon"/>
    <input placeholder="Search for friend, post or video" className="searchInput" />

</div>
<div  className="topbarRight"></div>
<div className="topbarLinks">
    <span className="topbarLink">Homepage</span>
    <span className="topbarLink">Timeline</span>
</div>
<div className="topbarIcons">
    <div className="topbarIconItem">
<Person/>
<span className="topbarIconBadge">1</span>
    </div>
</div>
<div className="topbarIcons">
    <div className="topbarIconItem">
<Chat/>
<span className="topbarIconBadge">2</span>
    </div>
</div>


<div className="topbarIcons">
    <div className="topbarIconItem">
<Notifications/>
<span className="topbarIconBadge">1</span>
    </div>
</div>

<img src="assets/Camera Roll/photo_2025-05-05_03-48-14.jpg" alt="" className="topbarImg" />


</div>




    )

}