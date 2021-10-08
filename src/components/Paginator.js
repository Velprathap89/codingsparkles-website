import React from "react";
import { Link } from 'gatsby';
import { Box, makeStyles } from "@material-ui/core";
import { ChevronLeft, ChevronRight } from "@material-ui/icons";
import "./Paginator.scss";

const useStyles = makeStyles({
    root: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem"
    }
});

const Paginator = ({ pageContext }) => {
    const { numPages, currentPage } = pageContext;
    const classes = useStyles();

    const isFirst = currentPage === 1
    const isLast = currentPage === numPages
    const prevPage = currentPage - 1 === 1 ? '/' : `/${(currentPage - 1).toString()}`;
    const nextPage = `/${(currentPage + 1).toString()}`;

    return <Box className={classes.root}>
        <Link className={`link-container ${isFirst ? "disabled" : ""}`} to={prevPage} rel="prev">
            <Box className="prev-page page-link">
                <ChevronLeft />
            </Box>
        </Link>
        {Array.from({ length: numPages }, (_, i) => (
            <Link className="link-container" key={`pagination-number${i + 1}`} to={`/${i === 0 ? "" : i + 1}`}>
                <Box className={`page-number page-link ${currentPage === i + 1 ? "active-page" : ""}`}>
                    {i + 1}
                </Box>
            </Link>
        ))}
        <Link className={`link-container ${isLast ? "disabled" : ""}`} to={nextPage} rel="next">
            <Box className="next-page page-link">
                <ChevronRight />
            </Box>
        </Link>
    </Box>
}

export default Paginator;