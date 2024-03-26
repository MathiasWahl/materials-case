import jsonData from './data.json';
import { Material } from '../types';

export const ImportData = () => {
  return jsonData.materials as Material[];
};
export function getMaterial(slug: string): Material | undefined {
  return jsonData.materials.find((material) => {
    return material.title.toLowerCase() === slug.toLowerCase();
  });
}
