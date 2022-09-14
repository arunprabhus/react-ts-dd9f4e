import React, { FC, useEffect, useState } from 'react';
import './style.css';

export default function Product({name, disc, price}) {

  return (
    <div>
      <h1>{name}</h1>
      <h2>{disc}</h2>
      <h4>{price}</h4>
    </div>
  );
}
