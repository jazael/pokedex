import React from "react";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  TablePagination,
} from "@material-ui/core";
import axios from "axios";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [count, setCount] = useState(1);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);
  const history = useHistory();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    axios
      .get(`${API_URL}?limit=${rowsPerPage}&offset=${page * rowsPerPage + 1}`)
      .then(({ data, status }) => {
        const { count, results } = data;
        if (status === 200) {
          setPokemons(results);
          setCount(count);
        }
      })
      .catch((err) => console.error);
  }, [page, rowsPerPage]);

  return (
    <>
      <Typography component="h1">POKEDEX</Typography>
      <TablePagination
        component="div"
        count={count}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Grid container spacing={1}>
        {pokemons.map((pokemon, index) => {
          const pokemonUrl = pokemon.url.split("/");
          return (
            <Grid key={index} item xs={2}>
              <Card>
                <CardActionArea
                  onClick={() => history.push(`/pokemon/${pokemon.name}`)}
                >
                  <CardMedia
                    component="img"
                    image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                      pokemonUrl[pokemonUrl.length - 2]
                    }.png`}
                    height="auto"
                  />
                  <CardContent>
                    <Typography
                      align="center"
                      gutterBottom
                      variant="h5"
                      component="h2"
                    >
                      {pokemon.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};

export default Home;
