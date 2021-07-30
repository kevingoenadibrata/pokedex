import { useEffect, useState } from "react";
import {
  BrowseContainerStyled,
  PaginationContainerStyled,
} from "./index.styles";
import PokemonCard from "./PokemonCard";
import Loader from "../../Components/Loader";
import { useHistory, useLocation } from "react-router-dom";
import { parse, stringify } from "query-string";
import { Pagination } from "evergreen-ui";
import {
  ENTRIES_PER_PAGE,
  getPokemonsList,
} from "../../Configurations/Pokeapi";

const Browse = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const history = useHistory();

  const getData = async () => {
    setIsLoading(true);
    try {
      const parsedLocation = parse(location.search);
      const requestedPage = parseInt(parsedLocation?.page);
      if (!requestedPage) {
        history.push(`?${stringify({ page: 1 })}`);
        return;
      }
      setPage(requestedPage);

      const res = await getPokemonsList(requestedPage);
      setPokemons(res.results);

      setPageCount(Math.floor(res.count / ENTRIES_PER_PAGE));
    } catch {
      console.error("Error fetching data from OMDB");
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [location.search]);

  const fetchPage = (i) => {
    history.push(`?${stringify({ page: i })}`);
  };

  if (isLoading) {
    return (
      <BrowseContainerStyled>
        <Loader />
      </BrowseContainerStyled>
    );
  }

  return (
    <BrowseContainerStyled>
      {pokemons.map((item, index) => (
        <PokemonCard i={index} key={index} data={item} />
      ))}
      <PaginationContainerStyled>
        <Pagination
          page={page}
          totalPages={pageCount}
          onPageChange={fetchPage}
          onNextPage={() => fetchPage(page + 1)}
          onPreviousPage={() => fetchPage(page - 1)}
        />
      </PaginationContainerStyled>
    </BrowseContainerStyled>
  );
};

export default Browse;
