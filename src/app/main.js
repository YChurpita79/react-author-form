import React from "react";
import { renderRoutes } from "react-router-config";
import { connect} from "react-redux";
import "./main.styl";

const Main = ( props ) => {
    return (
        <div className="main-wrap">
              {renderRoutes(props.route.routes)}
        </div>
    );
};

export default connect()(Main);
