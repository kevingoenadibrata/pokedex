import React, { useEffect, useState } from "react";
import { BrowseContainerCss, PageTitleCss } from "./index.styles";
import PokemonCard from "../../Components/PokemonCard";
import Loader from "../../Components/Loader";
import { useHistory, useLocation } from "react-router-dom";
import { parse, stringify } from "query-string";
import { Pagination } from "evergreen-ui";
import { PaginationContainer } from "../Details/index.styles";
import { getPokemonsList } from "../../Configurations/Pokeapi";

const ENTRIES_PER_PAGE = 20;

const Browse = () => {
  const [movies, setMovies] = useState([]);
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
      const res = await getPokemonsList(requestedPage);
      setMovies(res.results);
      setPage(requestedPage);
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

  return (
    <BrowseContainerCss>
      {isLoading ? (
        <Loader />
      ) : (
        movies.map((item, index) => (
          <PokemonCard i={index} key={index} data={item} />
        ))
      )}
      <PaginationContainer>
        <Pagination
          page={page}
          totalPages={pageCount}
          onPageChange={fetchPage}
          onNextPage={() => fetchPage(page + 1)}
          onPreviousPage={() => fetchPage(page - 1)}
        />
      </PaginationContainer>
    </BrowseContainerCss>
  );
};

export default Browse;
