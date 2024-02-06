import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Searchrecipe = ({ getSearchQuery, search_query, updateSearchQuery }) => {
  return (
    <>
        <form onSubmit={ getSearchQuery }>
            <div className="d-flex mb-3">
                <input type="text"
                className="form-control"
                    placeholder="Search"
                    value={ search_query }
                    onChange={ updateSearchQuery  }
                />
                <button className="btn btn-primary mx-2"
                type="submit"
                >Search
                </button>
            </div>
        </form>
    </>
  )
}

export default Searchrecipe