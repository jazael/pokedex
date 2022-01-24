import React from "react";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px",
  },
  paperBox: {
    height: "10rem",
    width: "10rem",
    borderRadius: "50%",
  },
}));

const PaperImage = ({ index, image }) => {
  const classes = useStyles();
  return (
    <Paper
      key={index}
      className={`${classes.centerAlign} ${classes.paperBox}`}
      style={{
        backgroundColor: "hsla(0,0%,100%,.47058823529411764)",
      }}
    >
      <img height="auto" width="auto" src={`${image || ""}`} />
    </Paper>
  );
};

export default PaperImage;
