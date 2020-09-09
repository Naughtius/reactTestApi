import React, { Component } from "react";
import classes from "./LikeButton.css";

export default class LikeButton extends Component {
   state = {
      hasLike: false,
   };

   componentDidMount() {
      this.props.data.forEach((item) => {
         const like = JSON.parse(localStorage.getItem(`like${item.id}`));
         console.log(like);
      });

      // const array = JSON.parse(localStorage.getItem("array"));
      // let hasLike = localStorage.getItem("hasLike") === "true";
      // this.setState({ hasLike });
   }

   addLike = () => {
      this.setState({
         hasLike: !this.state.hasLike,
      });
   };

   componentDidUpdate(prevProps, prevState) {
      if (this.state.hasLike !== prevState.hasLike) {
         const like = {
            id: this.props.id,
            hasLike: this.state.hasLike,
         };

         localStorage.setItem(`like${like.id}`, JSON.stringify(like));
      }
   }

   render() {
      const cls = [classes.like];
      if (this.state.hasLike) {
         cls.push(classes.active);
      }

      return (
         <div className={cls.join(" ")}>
            <i
               className={"fa fa-thumbs-up"}
               aria-hidden="true"
               onClick={this.props.addLike}
            ></i>
         </div>
      );
   }
}
