import { ColorMode } from "../../enums/ColorMode";
import { Theme } from "../../enums/Theme";

export interface IThemeState {
  theme: Theme;
  colorMode: ColorMode;
}