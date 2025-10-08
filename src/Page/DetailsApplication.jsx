import React from "react";
import { Link, useParams } from "react-router";
import useApplication from "../coponents/useApplication";
import DetailsTop from "../coponents/DetailsTop";

const DetailsApplication = () => {
  const { id } = useParams();
  const { application, loading, error } = useApplication();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const app = application.find(
    (singleApplication) => singleApplication.id == Number(id)
  );

  return (
    <DetailsTop></DetailsTop>
  );
};

export default DetailsApplication;
