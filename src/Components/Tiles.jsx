import React from "react";

function PageContent(props){
    return(
            <div className="container-fluid">
            <div className="card mt-2 mb-2" style={{width: "100%"}}>
                <div className="card-body">
                    <h6 className="card-title">{props.type}</h6>
                    <h5 className="card-subtitle mb-2 text-muted">{props.content}</h5>
                </div>
            </div>
            </div>
    );
}

export default PageContent;