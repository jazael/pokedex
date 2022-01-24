import React from "react";
import { Link } from "react-router-dom";
import {
  Breadcrumbs as Breadcrumb,
  Chip,
  withStyles,
  emphasize,
} from "@material-ui/core";

const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
    marginBottom: theme.spacing(1.2),
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(4),
    color: "#000080",
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.fontSize,
    "&:hover, &:focus": {
      backgroundColor: theme.palette.grey[300],
      cursor: "pointer",
      border: "1px solid #000080",
      outlineStyle: "solid",
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);

const Breadcrumbs = ({ crumbs }) => {
  if (crumbs.length <= 1) {
    return null;
  }

  return (
    <Breadcrumb aria-label="breadcrumb">
      {crumbs.map(({ name, path }, key) =>
        key + 1 === crumbs.length ? (
          <StyledBreadcrumb key={key} label={name} />
        ) : (
          <Link key={key} to={path}>
            <StyledBreadcrumb key={key} label={name} />
          </Link>
        )
      )}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
