import { useParams } from 'react-router-dom';
import { Material } from '../types';
import { getMaterial } from '../data-helpers';

export function MaterialDetail(material: Material) {
  const { slug } = useParams();
  if (!slug) {
    return <div>Material not found</div>;
  }
  const clickedMaterial: Material | undefined = getMaterial(slug);
  if (!clickedMaterial) {
    return <div>Material not found</div>;
  }
  return (
    <div className="max-w-sm shadow-lg p-5 border rounded-lg hover:scale-105">
      <img src={clickedMaterial.imageUrl}></img>
      <div className="text-gray-500">
        <p className="font-bold text-lg">{clickedMaterial.title}</p>
        <p>{`${clickedMaterial.quantity} ${clickedMaterial.unit}`}</p>
        {clickedMaterial.available ? <p>Tilgjengelig</p> : <p>Utilgjengelig</p>}
        <p className="font-bold text-lg">{clickedMaterial.Address}</p>
      </div>
    </div>
  );
}
