import "./sidebar.css";
import {
  RssFeed,
  Chat,
  PlayCircleFilledOutlined,
  Group,
  Bookmark,
  HelpOutline,
  WorkOutline,
  Event,
  School,
} from "@material-ui/icons";
import { Users } from "../../dummyData";
import CloseFriend from "../closeFriend/CloseFriend";

export default function Sidebar() {
  const list = [
    { title: "Feed", icon: <RssFeed className="sidebarIcon" /> },
    { title: "Chats", icon: <Chat className="sidebarIcon"/> },
    { title: "Videos", icon: <PlayCircleFilledOutlined className="sidebarIcon"/> },
    { title: "Groups", icon: <Group className="sidebarIcon"/> },
    { title: "BooksMarks", icon: <Bookmark className="sidebarIcon"/> },
    { title: "Questions", icon: <HelpOutline className="sidebarIcon"/> },
    { title: "Jobs", icon: <WorkOutline className="sidebarIcon"/> },
    { title: "Events", icon: <Event className="sidebarIcon"/> },
    { title: "Courses", icon: <School className="sidebarIcon"/> },
  ]
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          {list.map((item, index) => (
            <li key={index} className="sidebarListItem">
              {item.icon}
            <span className="sidebarListItemText">{item.title}</span>
          </li>
          ))}
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
          {Users.map((u) => (
            <CloseFriend key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}