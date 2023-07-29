import React from 'react';
import './ShopItem.css';
import AddCartButton from '../../AddCartButton/AddCartButton';

export default function ShopItem({ item }) {
  const { name, price, color, img } = item;
  return (
    <li className={'ShopItem'}>
      <img src={img} alt={name} className={'imgSI'} />
      <h2 className={'title'}>{name}</h2>
      <h3 className={'info'}>{color}</h3>
      <span className={'price'}>${price}</span>
      <AddCartButton />
    </li>
  );
}