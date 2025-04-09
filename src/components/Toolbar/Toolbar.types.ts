export type TextInputType = "text" | "color" | "bg" | "number";

export type toolbarItemType = TextInputType | "radio" | "select" | "slider";

export type ToolbarTextInputProps = {
  prefix?: string;
  label?: string;
  type?: TextInputType;
  onChange?: (value: any) => void;
  value?: any;
};

export type ToolbarItemProps = {
  prefix?: string;
  label?: string;
  full?: boolean;
  propKey?: string;
  index?: number;
  children?: React.ReactNode;
  type: toolbarItemType;
  containerClass?: string;
  onChange?: (value: any) => any;
};

export interface ToolbarSectionProps {
  title: string;
  props?: any;
  summary?: (props: Record<string, any>) => React.ReactNode;
  children?: React.ReactNode;
}
