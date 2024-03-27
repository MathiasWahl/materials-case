import { Link } from 'react-router-dom';
import { Material } from '../types';

export function MaterialBox({
  title,
  imageUrl,
  available,
  Address,
  unit,
  quantity,
}: Material) {
  return (
    <Link to={`/material/${title}`}>
      <div className="max-w-sm shadow-lg p-5 border rounded-lg hover:scale-105">
        <img src={imageUrl}></img>
        <div className="text-gray-500">
          <p className="font-bold text-lg">{title}</p>
          <p>{`${quantity} ${unit}`}</p>
          {available ? <p>Tilgjengelig</p> : <p>Utilgjengelig</p>}
        </div>
      </div>
    </Link>
  );
}
