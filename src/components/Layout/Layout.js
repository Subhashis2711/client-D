import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

const Layout = () => {
    return (
        <Fragment>
            <MediaQuery minWidth={779}>
                <DesktopLayout />
            </MediaQuery>
            <MediaQuery maxWidth={778}>
                <MobileLayout />
            </MediaQuery>
        </Fragment>
    );
};

export default Layout;
