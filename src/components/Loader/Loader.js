import React from "react";
import { ReactComponent as LoadingIcon } from "../../assets/Loading.svg";

import "./Loader.scss";

const Loader = () => {
    return (
        <div className="loader mx-auto">
            <LoadingIcon />
        </div>
    )
}

export default Loader;