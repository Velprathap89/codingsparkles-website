import React from 'react';
import { Box } from '@material-ui/core';
import './Main.scss';

const Main = props => {
    return <div className="cs-main">
        <Box>{props.children}</Box>
        <Box></Box>
    </div>
}

export default Main;