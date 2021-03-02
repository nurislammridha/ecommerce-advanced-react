import React from 'react';
import { InputBase, Paper, IconButton } from "@material-ui/core";

const SearchInput = (props) => {
    return (
        <Paper className="searchInput">
            <div className="float-left search-text">
                <InputBase placeholder="Search Products" />
            </div>
            <div className="float-right search-icon">
                <IconButton
                    aria-label="Search"
                    className="searchPlaceholder"
                >
                    <i className="fas fa-search"></i>
                </IconButton>
            </div>
            <div className="clearfix"></div>
        </Paper>
    );
}

export default SearchInput;