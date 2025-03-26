import {
  PlaylistPlay,
  History,
  TrendingUp,
  HomeOutlined,
  PlayArrowOutlined,
  SubscriptionsOutlined,
  WatchLaterOutlined,
  SettingsOutlined,
  ThumbUpOutlined,
} from "@mui/icons-material";
import styles from "../styles/Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar = ({ isOpen, toggleSidebar }: SidebarProps) => {
  const menuItems = [
    { text: "Home", icon: <HomeOutlined style={{ fontSize: "30px" }} /> },
    {
      text: "Shorts",
      icon: <PlayArrowOutlined style={{ fontSize: "32px" }} />,
    },
    {
      text: "Subscriptions",
      icon: <SubscriptionsOutlined style={{ fontSize: "30px" }} />,
    },
    { text: "You  > ", noIndent: true },
    { text: "History", icon: <History /> },
    { text: "Playlists", icon: <PlaylistPlay style={{ fontSize: "30px" }} /> },
    {
      text: "Watch Later",
      icon: <WatchLaterOutlined style={{ fontSize: "30px" }} />,
    },
    {
      text: "Liked Videos",
      icon: <ThumbUpOutlined style={{ fontSize: "30px" }} />,
    },
    { text: "Explore", noIndent: true },
    { text: "Trending", icon: <TrendingUp style={{ fontSize: "30px" }} /> },
    {
      text: "Settings",
      icon: <SettingsOutlined style={{ fontSize: "30px" }} />,
    },
  ];



return (
  <div
    className={`${styles.sidebar} ${isOpen ? styles.sidebarOpen : ""}`}
    onClick={toggleSidebar}
  >
    <ul className={styles.sidebarList}>
      {menuItems.map((item, index) => (
        <li
          key={index}
          className={`${styles.sidebarItem} ${
            isOpen ? styles.sidebarItemOpen : ""
          }`}
        >
          {/* Icon container */}
          {(index < 3 || isOpen) && (
            <div
              className={`${styles.iconContainer} ${
                isOpen ? styles.iconContainerOpen : ""
              }`}
            >
              {item.icon && item.icon}
            </div>
          )}
          {isOpen && (
            <span
              className={`${styles.text} ${
                isOpen ? styles.textOpen : ""
              }`}
            >
              {item.text}
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>
);
};

export default Sidebar;
