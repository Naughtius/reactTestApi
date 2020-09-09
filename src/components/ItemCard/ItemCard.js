import React from "react";
import classes from "./ItemCard.css";

import LikeButton from "../LikeButton";

const ItemCard = ({ data }) => (
   <div className={classes.ItemCard}>
      {data.map((item) => (
         <div className={classes.ItemCard_item} key={item.id}>
            <span className={classes.ItemCard_title}>{item.title}</span>
            <p>Имя: {item.first_name}</p>
            <p>Фамилия: {item.last_name}</p>
            <p>Отчество: {item.middle_name}</p>
            <p>Комнат: {item.rooms}</p>
            <p>
               Площадь: {item.area} {item.unit}
            </p>
            <p>Город: {item.city}</p>
            <p>Улица: {item.street}</p>
            <p>Дом: {item.house}</p>
            <LikeButton />
         </div>
      ))}
   </div>
);

export default ItemCard;
