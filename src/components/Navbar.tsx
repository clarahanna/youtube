import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import youtubeImg from "../assets/youtubeimg.png";
import styles from "../styles/Navbar.module.css";
import MenuIcon from "@mui/icons-material/Menu";
import MicIcon from "@mui/icons-material/Mic";
import AddIcon from "@mui/icons-material/Add";

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {

return (
  <div className={styles.navbar}>
  
  <div className={styles.navbarLeft}>
  <MenuIcon className={styles.menuIcon}  onClick={toggleSidebar}/>
    
    <img 
    src={youtubeImg} 
    alt="YouTube logo" 
    className={styles.logoContainer} />
  </div>

  {/* search bar */}
  <div className={styles.searchbarContainer}>
    <input 
      type="text" 
      placeholder="Search" 
      className={styles.searchbarInput} 
    />
    <button className={styles.searchbarButton}>Search</button>
    <div className={styles.micIconContainer}>
      <MicIcon className={styles.micIcon} />
    </div>
  </div>
  
  <div className={styles.navbarRight}>
    <div className={styles.createIcon}>
    <AddIcon />
    </div>
    <NotificationsIcon className={styles.notificationsIcon} />
    <AccountCircleIcon className={styles.accountCircleIcon} />
  </div>
  </div>  
);

}
export default Navbar;
