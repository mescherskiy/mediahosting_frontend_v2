import React, { useState, useEffect } from "react";

import { useGetAdminBoardQuery } from "../api/api";

const AdminBoard = () => {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   UserService.getAdminBoard().then(
  //     (response) => {
  //       setContent(response.data);
  //     },
  //     (error) => {
  //       const _content =
  //         (error.response &&
  //           error.response.data &&
  //           error.response.data.message) ||
  //         error.message ||
  //         error.toString();

  //       setContent(_content);
  //     }
  //   );
  // }, []);

  const { data: response, isError, error, isLoading } = useGetAdminBoardQuery();

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error! {error.data.message}</div>
  if (!response) return <div>Content is missing!</div>

  return (
    <div className="container">
      <header className="jumbotron">
        <h3>{response.message}</h3>
      </header>
    </div>
  );
};

export default AdminBoard;