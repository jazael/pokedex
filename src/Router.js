import { BrowserRouter, Switch, Route } from "react-router-dom";
import Routes from "./Routes";
import Breadcrumbs from "./Components/Breadcrumbs";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        {Routes.map(({ path, name, Component }, key) => (
          <Route
            exact
            path={path}
            key={key}
            render={(props) => {
              const crumbs = Routes.filter(({ path }) =>
                props.match.path.includes(path)
              ).map(({ path, ...rest }) => ({
                path: Object.keys(props.match.params).length
                  ? Object.keys(props.match.params).reduce(
                      (path, param) =>
                        path.replace(`:${param}`, props.match.params[param]),
                      path
                    )
                  : path,
                ...rest,
              }));

              return (
                <>
                  <Breadcrumbs crumbs={crumbs} />
                  <Component {...props} />
                </>
              );
            }}
          />
        ))}
        ;
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
