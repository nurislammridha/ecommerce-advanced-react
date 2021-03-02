import React, { useState } from "react";
import { InputBase, Paper, IconButton } from "@material-ui/core";

const SearchInput = (props) => {
  const [search, setSearch] = useState("");
  const suggestions = [
    {
      search_id: "saluar-kameez",
      search_name: "Saluar Kameez",
      search_image_url: null,
      is_item: true,
      search_price: 499,
      is_category: false,
      is_tag: false,
    },
    {
      slug: "cotton-shirts-for-gents",
      search_name: "Cotton Shirts for Gents",
      search_image_url: null,
      search_price: 0,
      is_item: false,
      is_category: false,
      is_tag: true,
    },
    {
      slug: "gents-t-shairt",
      search_name: "T-Shirt for Gents",
      search_image_url:
        "https://images.othoba.com/images/thumbs/0312595_mens-half-sleeve-t-shirt.jpeg",
      is_item: false,
      is_category: false,
      search_price: 0,
      is_tag: true,
    },
    {
      slug: "rolex-watch",
      search_name: "Watch - Rolex",
      search_image_url:
        "https://images.othoba.com/images/thumbs/0321841_huawei-watch-fit-black.jpeg",
      is_item: false,
      is_category: true,
      search_price: 0,
      is_tag: false,
    },
  ];

  const searchProduct = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Paper className="searchInput">
        <div className="float-left search-text">
          <InputBase
            placeholder="Search Products"
            onInput={(e) => searchProduct(e)}
          />
        </div>
        <div className="float-right search-icon">
          <IconButton aria-label="Search" className="searchPlaceholder">
            <i className="fas fa-search"></i>
          </IconButton>
        </div>
        <div className="clearfix"></div>
      </Paper>
      {search.length > 0 && suggestions.length > 0 && (
        <div className="search-suggestion-area">
          {suggestions.map((searchItem, searchIndex) => (
            <div className="search-suggestion-item" key={searchIndex}>
              {searchItem.search_image_url !== null ? (
                <div className="float-left">
                  <img src={searchItem.search_image_url} alt="" width={50} />
                </div>
              ) : (
                <div className="float-left">
                  <img
                    src="/images/default/fallback-image.png"
                    alt=""
                    width={50}
                  />
                </div>
              )}

              <div className="float-left">
                <h5 className="search-title">{searchItem.search_name}</h5>
                {searchItem.search_price != 0 && (
                  <p>Tk. {searchItem.search_price}</p>
                )}
              </div>

              <div className="clearfix"></div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SearchInput;
