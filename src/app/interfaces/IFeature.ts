import { IconDefinition } from "@fortawesome/free-regular-svg-icons";

export interface IFeature {
  id: number;
  icon: IconDefinition;
  title: string;
  description: string;
  iconColor: string;
}