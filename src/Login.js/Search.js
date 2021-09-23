import React, { useState } from "react";
import { TextField, Button, makeStyles } from "@material-ui/core";

const SearchBar = (props) => {
    const classes = useStyles();
    
    const submit = (data) => {
        let { value = "", onSubmit } = props;
        onSubmit(value)
    }
    let { value } = props;

    const onChange = (ev) => {
        let { onChange } = props;
        let value = String(ev.target.value).trimLeft();
        onChange(value);
    };
    return (
        <>
            <TextField
                variant="outlined"
                value={value}
                placeholder={"Search for beer..."}
                className={classes.root}
                onChange={onChange}
                style={{textTransform:'capitalize'}}
                // onKeyDown={keyDown}
            />
            <Button variant="contained" color="primary" className={classes.searchButton}  onClick={() => submit(props.value)}>
                Search
            </Button>
        </>
    );
};
const useStyles = makeStyles((theme) => ({
    root: {
        width: 'calc(100% - 150px)',
        marginRight: '12px'
    },
    searchButton: {
        padding:  "14px 20px"
    },
}));
export default SearchBar;