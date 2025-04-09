import React from "react";
import { BaseComponent } from "./BaseModal";
import { ContainerProps } from "../Demo/Container/ContainerComponent";
import { BaseContainerSettings } from "./BaseContainerSettings";
import { useNode } from "@craftjs/core";

const BaseContainer = ({ children, ...props }: ContainerProps) => {
  const {
    connectors: { connect, drag },
  } = useNode();
  return (
    <BaseComponent
      ref={(ref: HTMLDivElement | null) => {
        if (ref) connect(drag(ref));
      }}
      $background={props.background}
      $width={props.width}
      $height={props.height}
      $padding={props.padding}
      className="shadow-sm bg-white rounded-sm min-h-[80vh]"
    >
      {children}
    </BaseComponent>
  );
};
BaseContainer.craft = {
  displayName: "Base Container",
  props: {
    background: { r: 255, g: 255, b: 255, a: 0.5 },
    padding: ["10", "10", "10", "10"],
  },
  related: {
    toolbar: BaseContainerSettings,
  },
};

export default BaseContainer;
