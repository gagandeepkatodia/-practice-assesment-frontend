import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Jumbotron from "react-bootstrap/Jumbotron";
// import Container from "react-bootstrap/Container";
import { fetchSpaces } from "../../store/spaces/thunks";
import { selectSpaces } from "../../store/spaces/selectors";
import Space from "../../components/Space";

export default function Spaces() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);

  useEffect(() => {
    dispatch(fetchSpaces());
  }, [dispatch]);

  return (
    <>
      <h1>Spaces from page</h1>

      {spaces.map((space) => {
        return (
          <Space
            key={space.id}
            id={space.id}
            title={space.title}
            description={space.description}
            backgroundColor={space.backgroundColor}
            color={space.color}
            showLink={true}
          />
        );
      })}
    </>
  );
}
