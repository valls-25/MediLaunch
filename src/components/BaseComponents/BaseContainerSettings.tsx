import React from "react";
import { ToolbarSection } from "../Toolbar/ToolbarSection";
import { ToolbarItem } from "../Toolbar/ToolbarItem";
import { SelectItem } from "@radix-ui/react-select";

export const BaseContainerSettings = () => {
  return (
    <div className="px-2">
      {/* Section for Color Settings */}

      <ToolbarSection title="Colors" props={["background"]}>
        <ToolbarItem
          full={true}
          propKey="background"
          type="bg"
          label="Background"
        />
      </ToolbarSection>

      {/* Section for Layout Settings */}

      <ToolbarSection title="Layout" props={["display"]}>
        <div className="grid  px-6 gap-2">
          <ToolbarItem propKey="display" type="select" label="Display" full>
            <SelectItem value="inline">Inline</SelectItem>
            <SelectItem value="block">Block</SelectItem>
            <SelectItem value="flex">Flex</SelectItem>
            <SelectItem value="inline-block">Inline Block</SelectItem>
            <SelectItem value="grid">Grid</SelectItem>
            <SelectItem value="none">None</SelectItem>
          </ToolbarItem>
        </div>
      </ToolbarSection>

      <ToolbarSection
        title="Padding"
        props={["padding"]}
        summary={({ padding }: any) => {
          return `${padding[0] || 0}px ${padding[1] || 0}px ${
            padding[2] || 0
          }px ${padding[3] || 0}px`;
        }}
      >
        <div className="grid grid-cols-2 px-6 gap-2">
          {["Top", "Right", "Bottom", "Left"].map((label, index) => (
            <ToolbarItem
              key={label}
              propKey="padding"
              index={index}
              type="text"
              full
              label={label}
              placeholder="Padding in px"
            />
          ))}
        </div>
      </ToolbarSection>
    </div>
  );
};
