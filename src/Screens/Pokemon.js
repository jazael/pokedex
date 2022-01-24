import React, { useEffect, useState, useCallback } from "react";
import { useParams, useHistory } from "react-router-dom";

import {
  Typography,
  Card,
  CardActionArea,
  CardContent,
  Box,
  makeStyles,
  Grid,
  Chip,
  Divider,
} from "@material-ui/core";

import axios from "axios";
import PaperImage from "../Components/PaperImage";
import GridContent from "../Components/GridContent";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const useStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
  },
  centerAlign: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    margin: "4px",
  },
  cardContent: {
    flexDirection: "column",
    borderRadius: "2rem",
    padding: 0,
  },
  typographyUppercase: {
    textTransform: "uppercase",
  },
}));

const Pokemon = () => {
  const classes = useStyles();
  const history = useHistory();
  let { name } = useParams();
  const handleOnClick = (move) => history.push(`/pokemon/${name}/move/${move}`);
  const [pokemonDetail, setPokemonDetail] = useState(undefined);

  useEffect(() => {
    axios
      .get(`${API_URL}/${name}`)
      .then(({ data, status }) => {
        if (status === 200) {
          setPokemonDetail(data);
        }
      })
      .catch((err) => console.error);
  }, []);

  return (
    <Grid container spacing={1} key={1} item xs={12}>
      <Card className={classes.root}>
        <CardActionArea
          disableRipple
          style={{
            backgroundColor: "#eee",
          }}
        >
          <CardContent
            className={`${classes.centerAlign} ${classes.cardContent}`}
          >
            <Typography
              className={`${classes.typographyUppercase}`}
              align="center"
              gutterBottom
              variant="h4"
            >
              {pokemonDetail ? pokemonDetail.name : null}
            </Typography>
            <Box
              className={`${classes.centerAlign}`}
              sx={{ flexDirection: { xs: "column", md: "row" } }}
              style={{ padding: "1rem 0 1rem 0" }}
            >
              {pokemonDetail
                ? Object.keys(pokemonDetail.sprites).map((key, index) => {
                    const { other, versions, ...listImages } =
                      pokemonDetail.sprites;
                    const image = listImages[key];
                    return image ? (
                      <PaperImage key={index} index={index} image={image} />
                    ) : (
                      false
                    );
                  })
                : null}
            </Box>
            {pokemonDetail ? (
              <GridContent infTypeOrMoves={pokemonDetail.types} title="Tipos" />
            ) : null}
            {pokemonDetail ? (
              <GridContent
                infTypeOrMoves={pokemonDetail.moves}
                title="Movimientos"
                goToAction={handleOnClick}
              />
            ) : null}
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default Pokemon;
