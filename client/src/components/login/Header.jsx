import React, { useState, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import HomeIcon from "@material-ui/icons/Home";
import { navigate } from "@reach/router";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CommentIcon from "@material-ui/icons/Comment";

import { Link } from "@reach/router";
import axios from "axios";
import Cookies from "js-cookie";
import EmailIcon from "@material-ui/icons/Email";
import PersonIcon from "@material-ui/icons/Person";
import LabelIcon from "@material-ui/icons/Label";

import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import Tooltip from "@material-ui/core/Tooltip";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import InfoIcon from "@material-ui/icons/Info";
import { Collapse } from "@material-ui/core";
import BackGroundHomePage from "./BackGroundHomePage";
const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
const Header = (props) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [roomName, setRoomName] = useState("");
  const [username, setUsername] = useState(Cookies.get("username"));
  const [email, setEmail] = useState(Cookies.get("email"));
  const [badgeNumber, setbadgeNumber] = useState(Cookies.get("badgeNumber"));
  const [phoneNumber, setPhoneNumber] = useState(Cookies.get("phoneNumber"));
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/rooms")
      .then((res) => setRooms(res.data))
      .catch((err) => console.log(err));
  }, []);

  const homeIcon = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const createRoom = (e) => {
    e.preventDefault();
    const newRoom = {
      user: Cookies.get("userId"),
      roomName: roomName,
    };
    axios
      .post("http://localhost:8000/api/room", newRoom)
      .then((res) => res.data)
      .catch((err) => console.log(err));
  };
  const logout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/api/logout")
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };
  const notificationIcon = (e) => {
    e.preventDefault();
    navigate("/notification");
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const foodPage = (e) => {
    e.preventDefault();
    navigate("/food");
  };
  // const createRoom = (e) => {
  //   e.preventDefault();
  //   navigate("/room");
  // };
  const aboutAXSOS = (e) => {
    e.preventDefault();
    navigate("/about");
  };
  const handleLogeToAXSOSPage = () => {
    window.open("https://academy.axsos.ps/");
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar
          position="static"
          style={{
            backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
          }}
        >
          <Toolbar
            style={{
              color: "black",
              backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(classes.menuButton, open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div
                className={classes.drawerHeader}
                style={{
                  backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
                }}
              >
                <IconButton
                  onClick={handleDrawerClose}
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2c3e50,#3498db)",
                  }}
                >
                  <p>
                    <a
                      href="https://academy.axsos.ps/"
                      target="_blank"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, #2c3e50,#3498db)",
                        border: "white",
                      }}
                    >
                      <img
                        width="200px"
                        src="https://academy.axsos.ps/wp-content/uploads/2020/04/AXSOS-Logo-SVG.svg"
                      />
                    </a>
                  </p>

                  {theme.direction === "ltr" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List
                style={{
                  backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
                }}
              >
                {/* // User Name in the side bar */}
                <ListItem button key={username}>
                  <ListItemIcon>
                    <Tooltip title="Visit your GitHub" arrow>
                      <a
                        href="https://github.com/"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        {" "}
                        <PersonIcon />
                      </a>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={username} />
                </ListItem>
                {/* // Email in the side bar */}
                <ListItem button key={email}>
                  <ListItemIcon>
                    <Tooltip title="Visit your Gmail" arrow>
                      <a
                        href="https://www.gmail.com/"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        {" "}
                        <EmailIcon />
                      </a>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={email} />
                </ListItem>

                {/* // badgeNumber in the side bar */}
                <ListItem button key={badgeNumber}>
                  <ListItemIcon>
                    <Tooltip title="Visit Coding-Dojo" arrow>
                      <a
                        href="https://learn.codingdojo.com/"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        {" "}
                        <LabelIcon />
                      </a>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={badgeNumber} />
                </ListItem>

                {/* // phoneNumber in the side bar */}
                <ListItem button key={phoneNumber}>
                  <ListItemIcon>
                    <Tooltip title="Visit your WhatsApp web" arrow>
                      <a
                        href="https://web.whatsapp.com/"
                        target="_blank"
                        style={{ color: "black" }}
                      >
                        {" "}
                        <WhatsAppIcon />
                      </a>
                    </Tooltip>
                  </ListItemIcon>
                  <ListItemText primary={phoneNumber} />
                </ListItem>

                {/* {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )} */}
              </List>
              {/* create roooooooms */}
              <div
                style={{
                  backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
                }}
              >
                <div
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #2c3e50,#3498db)",
                  }}
                >
                  <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  >
                    {/* <ExpandMoreIcon /> */}
                    <CommentIcon
                      primary="Create Room"
                      style={{ color: "black" }}
                    />

                    <ListItemText
                      primary="Create Rooms"
                      style={{ color: "black" }}
                    />
                  </IconButton>

                  <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <form onSubmit={createRoom}>
                      <label
                        htmlFor="roomName"
                        style={{ color: "black" }}
                      ></label>
                      <br />
                      <input
                        placeholder="Room Name"
                        type="text"
                        onChange={(e) => setRoomName(e.target.value)}
                      />
                      <button
                        style={{
                          color: "black",
                          backgroundImage:
                            "linear-gradient(to right, #2c3e50,#3498db)",
                        }}
                        type="submit"
                        style={{
                          color: "black",
                          backgroundImage:
                            "linear-gradient(to right, #2c3e50,#3498db)",
                        }}
                      >
                        Create
                      </button>
                    </form>
                  </Collapse>
                </div>
                {rooms.map((room, idx) => {
                  return (
                    <ul
                      style={{
                        color: "black",
                        backgroundImage:
                          "linear-gradient(to right, #2c3e50,#3498db)",
                      }}
                    >
                      <Link
                        to={`/${room._id}`}
                        style={{
                          color: "black",
                          backgroundImage:
                            "linear-gradient(to right, #2c3e50,#3498db)",
                        }}
                      >
                        <li
                          style={{
                            color: "black",
                            backgroundImage:
                              "linear-gradient(to right, #2c3e50,#3498db)",
                          }}
                          key={idx}
                        >
                          {room.roomName}
                        </li>
                      </Link>
                    </ul>
                  );
                })}
              </div>
              {/* </List> */}

              {/* </List> */}
              <Divider />
              <List
                style={{
                  backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
                }}
              >
                {/* //Food Page */}
                <ListItem button>
                  <ListItemIcon>
                    <FastfoodIcon />
                  </ListItemIcon>
                  <ListItemText onClick={foodPage} primary="Food Suggestion" />
                </ListItem>

                {/* //create room */}
                <ListItem button>
                  <ListItemIcon>
                    <GroupAddIcon />
                  </ListItemIcon>
                  <ListItemText onClick={createRoom} primary="Create Room" />
                </ListItem>
                {/* //About AXSOS */}
                <ListItem button>
                  <ListItemIcon>
                    <InfoIcon />
                  </ListItemIcon>
                  <ListItemText onClick={aboutAXSOS} primary="About AXSOS" />
                </ListItem>
                {/* {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))} */}
              </List>
            </Drawer>
            <Typography variant="h6" className={classes.title}>
              {props.pageTitle}
            </Typography>
            <HomeIcon onClick={homeIcon} />

            <MenuItem>
              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
                onClick={notificationIcon}
              >
                <Badge badgeContent={100} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </MenuItem>

            <Button onClick={logout} color="inherit">
              logOut
            </Button>
          </Toolbar>
        </AppBar>
      </div>
      <div
        style={{
          backgroundImage: "linear-gradient(to right, #5fc3e4,#e55d87)",
        }}
      >
        <BackGroundHomePage />
      </div>
    </>
  );
};
export default Header;
