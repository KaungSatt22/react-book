import React from 'react';
import SiteLayout from "./siteLayout";

const Ui = () => {
    return (
        <SiteLayout menu={<p>Menu</p>}>
            <>
                <Callout>Callout</Callout>
                <h1>Contents</h1>
                <p>This is the main part of the example layout</p>
            </>
        </SiteLayout>
    );
};

export default Ui;