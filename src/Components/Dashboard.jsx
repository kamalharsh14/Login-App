import React from "react";
import details from "./Details";
import Navigation from "./Navigation";
import PageContent from "./Tiles";
import TileDetails from "./Details";

function Dashboard(){
    return(
        <>
        <Navigation />
        {TileDetails.map(details => (<PageContent key = {details.id} type = {details.type} content = {details.content}/>))}
        </>
      );
}

export default Dashboard;