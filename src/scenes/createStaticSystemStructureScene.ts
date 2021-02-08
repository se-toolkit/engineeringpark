import addLayout from "../addLayout";
import createLayout from "../createLayout";
import getCoordinatesRelativeToBase from "../utils/getCoordinatesRelativeToBase";
import { Location } from "../utils/Location";

export interface Args {
  parent: Entity; // the parent of the entity
  location: Location; // the location of the entity in the DCL LAND coordinate system
}

export default function createStaticSystemStructureScene({
  parent,
  location
}: Args) {
  const origin = getCoordinatesRelativeToBase(location);

  addLayout({
    parent,
    layout: createLayout(),
    position: new Vector3(origin.x + 8, 0, origin.y + 8),
    rotation: Quaternion.Euler(0, 0, 0),
    scale: new Vector3(0.5, 0.5, 0.5)
  });
}
