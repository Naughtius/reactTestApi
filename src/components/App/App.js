import React, { Component } from "react";

import ItemCard from "../ItemCard";
import request from "../../service/http.request";
import Layout from "../../hoc/Layout";
import ErrorIndicator from "../ErrorIndicator";
import Spinner from "../Spinner";

export default class App extends Component {
   request = new request();

   state = {
      data: [],
      hasError: false,
      loading: true,
   };

   componentDidMount() {
      this.request.getResources.then(
         (data) => {
            this.setState({
               data,
               loading: false,
            });
         },
         (error) => {
            this.onError();
         }
      );
	}

   componentDidCatch() {
      this.onError();
   }

   onError = () => {
      this.setState({
         hasError: true,
         loading: false,
      });
   };

   render() {
      const { data, hasError, loading } = this.state;

      if (hasError) {
         return <ErrorIndicator />;
      }

      const hasData = !(loading || hasError);

      const errorMessage = hasError ? <ErrorIndicator /> : null;
      const spinner = loading ? <Spinner /> : null;
      const content = hasData ? <ItemCard data={data} addLike={this.addLike} /> : null;

      return (
         <Layout>
            {errorMessage}
            {spinner}
            {content}
         </Layout>
      );
   }
}
