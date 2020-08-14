import React from 'react';
import Helmet from 'react-helmet';

const SetIcon = ({ icon }) => {
    var defaultIcon = 'media/logo.ico';
    return (
        <Helmet>
            <link rel="icon" href="{icon}"></link>
        </Helmet>
    );
};

export { SetIcon };