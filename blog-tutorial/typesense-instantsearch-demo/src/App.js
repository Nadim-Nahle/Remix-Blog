import React from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Configure,
  Hits,
  SearchBox,
  Pagination,
} from 'react-instantsearch-dom';
import PropTypes from 'prop-types';
import './App.css';

const searchClient = algoliasearch('7', 'DVdpM5bxnky7eBIew1Wb1vLpPQMmJmdI');

function App() {
  return (
    <div>
      <header className="header">
        <h1 className="header-title">
          <a href="/">demo</a>
        </h1>
        <p className="header-subtitle">
          using{' '}
          <a href="https://github.com/algolia/react-instantsearch">
            React InstantSearch
          </a>
        </p>
      </header>

      <div className="container">
        <InstantSearch searchClient={searchClient} indexName="products">
          <Configure hitsPerPage={8} />
          <div className="search-panel">
            <div className="search-panel__filters"></div>

            <div className="search-panel__results">
              <SearchBox
                className="searchbox"
                translations={{
                  placeholder: '',
                }}
              />
              <Hits hitComponent={Hit} />

              <div className="pagination">
                <Pagination />
              </div>
            </div>
          </div>
        </InstantSearch>
      </div>
    </div>
  );
}

function Hit(props) {
  return (
    <article>
      <p>
        <code>{JSON.stringify(props.hit).slice(0, 100)}...</code>
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
