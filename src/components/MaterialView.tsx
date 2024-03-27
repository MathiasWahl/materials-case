import { useState } from 'react';
import { ImportData } from '../data-helpers/import-data';
import { Material } from '../types';
import { MaterialBox } from './MaterialBox';

const materials = ImportData();

export function MaterialView() {
  const [showUnavailable, setShowUnavailable] = useState(false);
  const filteredMaterials: Material[] = materials.filter((m) => {
    return showUnavailable ? true : m.available;
  });
  return (
    <div>
      <button onClick={() => setShowUnavailable(!showUnavailable)}>
        Toggle tilgjengelig
      </button>

      <div className=" p-12 grid grid-cols-3 gap-12 text-center">
        {filteredMaterials.map((m) => {
          return <MaterialBox {...m} key={m.title} />;
        })}
      </div>
    </div>
  );
}
