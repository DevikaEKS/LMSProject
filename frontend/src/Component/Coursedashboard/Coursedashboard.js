import React from "react";



import Content from "../Content/Content";
import Sidebarnew from "../Coursesidebar/Coursesidebar";

export function Coursedashboard() {  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-2">
    <Sidebarnew/>
          </div>
          <div className="col-lg-10">
       <Content/>
          </div>
        </div>
      </div>
    </>
  );
}





