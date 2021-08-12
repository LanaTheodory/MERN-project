import React, { useState } from "react";
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
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "@reach/router";
import axios from "axios";
import Cookies from "js-cookie";

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
  const [username, setUsername] = useState(Cookies.get("username"));
  const classes = useStyles();

  const homeIcon = (e) => {
    e.preventDefault();
    navigate("/");
  };
  const logout = (e) => {
    e.preventDefault();
    axios
      .get("http://localhost:8000/api/logout")
      .then((res) => navigate("/register"))
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
  const handleLogeToAXSOSPage = () => {
    window.open("https://academy.axsos.ps/");
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        style={{
          backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
        }}
      >
        <Toolbar>
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
                  backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
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
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={username} />
              </ListItem>

              {["Inbox", "Starred", "Send email", "Drafts"].map(
                (text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>
                      {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                )
              )}
            </List>
            <Divider />
            <List
              style={{
                backgroundImage: "linear-gradient(to right, #2c3e50,#3498db)",
              }}
            >
              {["All mail", "Trash", "Spam"].map((text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              ))}
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
              <Badge badgeContent={11} color="secondary">
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
  );
};
export default Header;
