import React, { Fragment } from "react";
import MediaQuery from "react-responsive";
import DesktopLayout from "./DesktopLayout";
import MobileLayout from "./MobileLayout";

const Layout = (props) => {
    return (
        <Fragment>
            <MediaQuery minWidth={961}>
                <DesktopLayout>
                    {props.children}
                </DesktopLayout>
            </MediaQuery>
            <MediaQuery maxWidth={960}>
                <MobileLayout />
            </MediaQuery>
        </Fragment>
    );
};

export default Layout;
