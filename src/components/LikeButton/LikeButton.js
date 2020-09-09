import React, { Component } from "react";
import classes from "./LikeButton.css";

export default class LikeButton extends Component {
   state = {
      hasLike: false,
   };

   addLike = () => {
      this.setState({
         hasLike: !this.state.hasLike,
      });
   };

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
               onClick={this.addLike}
            ></i>
         </div>
      );
   }
}
