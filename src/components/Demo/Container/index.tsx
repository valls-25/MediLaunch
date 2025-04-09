import React from "react";
import { Element } from "@craftjs/core";
import { Container } from "./ContainerComponent";

export const createDefaultContainer = () => {
  return <Element id="Container" is={Container} canvas />;
};
