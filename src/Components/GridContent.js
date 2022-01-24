import React from "react";
import { Typography, Grid, Chip, Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    margin: "4px",
  },
}));

const GridContent = ({ infTypeOrMoves, title, goToAction }) => {
  const classes = useStyles();
  return (
    <>
      <Divider variant="middle" />
      <Typography variant="h5" gutterBottom component="div" align="center">
        {title}
      </Typography>
      <Grid container spacing={2} className={`${classes.centerAlign}`}>
        {infTypeOrMoves
          ? infTypeOrMoves.map((content) => {
              const grid = content.type ? (
                <Grid key={content.type.name} item>
                  <Chip
                    size="large"
                    color="secondary"
                    label={content.type.name}
                  />
                </Grid>
              ) : (
                <Grid key={content.move.name} item>
                  <Chip
                    color="primary"
                    variant="outlined"
                    onClick={() => goToAction(content.move.name)}
                    label={content.move.name}
                  />
                </Grid>
              );
              return grid;
            })
          : null}
      </Grid>
    </>
  );
};

export default GridContent;
