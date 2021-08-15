import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Fab from "@material-ui/core/Fab";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Zoom from "@material-ui/core/Zoom";
import ImagesSlider from "./ImagesSlider";
import HomeIcon from "@material-ui/icons/Home";
import { Link } from "@reach/router";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function BackToTop(props) {
  return (
    <div>
      <CssBaseline />
      <AppBar>
        <Toolbar
                 
          style={{
            backgroundImage: "linear-gradient(to right, #61045F, #61045F)",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h6">About AXSOS Academy</Typography>
          <Link to="/home">
            <HomeIcon style={{ float: "right", color: "white" }} />
          </Link>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />

      <Container>
        <Box my={2} style={{ marginTop: "90px", display: "block" }}>
          <ImagesSlider style={{ display: "block" }} />
          <br />
          <p style={{ padding: "2em", lineHeight: "2em", fontSize: "20px" }}>
            {[...new Array(2)]
              .map(
                () =>
                  `AXSOS Academy is a coding Academy in Palestine that aims to graduate thousands of skilled Software engineers
                 in Palestine. We offer our students world-class training, from experienced local and international instructors.
                  AXSOS Academy ensures that each student that goes through our training, is not only technically equipped but 
                  also has all the soft skills needed to work in a high-demanding work environment, by imitating real work stimuli.
                   We aim to place each of our graduates in the IT market, either locally or globally, through the network of companies AXSOS Academy has. As part of the government’s program for economic recovery, after the Corona crisis, and as part of the 2020 projects (the year of Palestinian youth), the government launched the “Youth Coding” program, which is the first of it’s kind.
                   The program will be executed by AXSOS AG company as “AXSOS Academy” with a partnership with Coding DOJO.`
              )
              .join("\n")}
          </p>
        </Box>
      </Container>
      <ScrollTop {...props}>
        <Fab color="white" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </div>
  );
}
