import { ChartType } from "chart.js";

export type ScrollType = "Horizontal" | "Vertical";
export interface PluginOptions {
  enable: boolean;
  scrollType: ScrollType;
  hideScrollButton?: boolean;
  rtl?: boolean;
  scrollBar?: {
    scrollerBg?: string;
    bg: string;
    chartOffset?: number;
  };
}

declare module "chart.js" {
  export interface PluginOptionsByType<_TType extends ChartType> {
    scrollBar?: PluginOptions;
  }
}
