import { Container } from "@material-ui/core";
import React from "react";
import { NewsCard } from "./NewsCard";

export const NewsContent = ({ newsArray, newsResults }) => {
  return (
    <div>
      <Container maxWidth="md">
       {
           newsArray.map((nitem)=>(
               <NewsCard nitem={nitem}/>
           ))
       }
      </Container>
    </div>
  );
};
