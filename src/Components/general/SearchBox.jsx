import React from "react";
import InputBase from "@mui/material/InputBase";
import Box from "./Box";
import Stack from "./stack";
import Paper from "./Paper";

const SearchBox = ({
    onInputChange,
}) => {
  return (
    <>
      <Stack>
        <Box
          sx={{
            minWidth: 150,
            textAlign: "right",
            alignContent: "flex-end",
            borderRadius: "5px !important",
          }}
        >
          <Paper
            component="form"
            sx={{
              p: "2.5px 0",
              display: "flex",
              alignItems: "center",
              height: "35px",
            }}
          >
            <InputBase
              sx={{ ml: 20, flex: 2 }}
              placeholder="Search"
              onChange={(e) => onInputChange(e.target.value)}
              inputProps={{ "aria-label": "search" ,
              style: {
                fontSize: "18px",
                fontWeight: "bold",
                color: "#808591",
              }
            
            }}
            />
          </Paper>
        </Box>
      </Stack>
    </>
  );
};

export default SearchBox;