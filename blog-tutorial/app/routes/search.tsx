import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import { Hits, InstantSearch, SearchBox } from "react-instantsearch-dom";

const typesenseInstantSearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: 8108,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title, description",
    query_by_weights: "4,1",
  },
});

function Search() {
  return (
    <div>
      <InstantSearch
        indexName="products"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <div>
          <SearchBox />
          <Hits />
        </div>
      </InstantSearch>
    </div>
  );
}

export default Search;
