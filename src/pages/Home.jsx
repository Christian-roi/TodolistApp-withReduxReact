import React from "react";
import Header from "../components/ui/Header";
import Layout from "../components/ui/Layout";
import Form from "../components/todo/Form";
import List from "../components/todo/List";

const Home = () => {
  return (
    <Layout>
      <Header />
      <Form />
      <List />
    </Layout>
  );
};

export default Home;
