import jsonData from "./data.json"
import {Material} from "../types";

export const ImportData = () => {
    return jsonData.materials as Material[];
}