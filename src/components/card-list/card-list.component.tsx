import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.css';

import { Monster } from '../../App';

type CardListProps = {
  monsters: Monster[];
};

export const CardList = ({ monsters }: CardListProps) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
