import React, { useState } from "react";
import { ClassicSpinner } from "react-spinners-kit";

export default function Spinner(props) {
  const [loading, isLoading] = useState(false);

  const startSpinner = () => {
    isLoading(true);
  };

  return <ClassicSpinner size={30} color="#686769" loading={props.loading} />;
}
