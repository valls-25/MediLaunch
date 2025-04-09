import React from "react";
import { BaseElementSettings } from "@/components/BaseComponents/BaseModalSettings";

export const ButtonSettings = () => {
  // Define supported styles for the button
  const supportedStyles = [
    "color",
    "margin",
    "padding",
    "layout",
    "border",
    "typography",
    "other",
  ];

  return (
    <BaseElementSettings elementType="Button" supportedStyles={supportedStyles}>
      {/* Custom sections specific to Button can be added here if needed */}
    </BaseElementSettings>
  );
};
