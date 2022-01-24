import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const API_URL = "https://pokeapi.co/api/v2/move";

const useStyles = makeStyles((theme) => ({
  centerAlign: {
    display: "flow-root",
    justifyContent: "center",
    alignItems: "stretch",
    margin: "4px",
  },
  typographyUppercase: {
    textTransform: "uppercase",
  },
  spanBold: {
    fontWeight: "bold",
  },
}));

const Movements = () => {
  let { name, movimiento } = useParams();
  const [movements, setMovements] = useState(undefined);
  const classes = useStyles();

  useEffect(() => {
    axios
      .get(`${API_URL}/${movimiento}`)
      .then(({ data, status }) => {
        if (status === 200) {
          setMovements(data);
          console.log(data);
          console.log(data.power);
          console.log(data.accuracy);
        }
      })
      .catch((err) => console.error);
  }, []);

  return (
    <Grid
      className={`${classes.centerAlign}`}
      container
      spacing={1}
      key={1}
      item
      xs={12}
    >
      {movements ? (
        <>
          <Typography
            className={classes.typographyUppercase}
            variant="h3"
            gutterBottom
            component="div"
            align="center"
          >
            {name}
          </Typography>
          {movements.effect_entries.map(({ effect, short_effect }, index) => {
            return (
              <Grid container spacing={2} key={index}>
                <p>
                  <span className={classes.spanBold}>Effect:</span> {effect}
                </p>
                <p>
                  <span className={classes.spanBold}>Short Effect:</span>{" "}
                  {short_effect}
                </p>
              </Grid>
            );
          })}
          <Typography variant="h5" gutterBottom component="div" align="center">
            Accuracy: {movements.accuracy || "N/A"}
          </Typography>
          <Typography variant="h5" gutterBottom component="div" align="center">
            Power: {movements.power || "N/A"}
          </Typography>
        </>
      ) : null}
    </Grid>
  );
};

export default Movements;
