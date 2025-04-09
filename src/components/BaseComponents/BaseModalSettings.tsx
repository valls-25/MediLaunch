import React, { ReactNode } from "react";
import { ToolbarItem } from "../Toolbar/ToolbarItem";
import { ToolbarSection } from "../Toolbar/ToolbarSection";

interface BaseElementSettingsProps {
  elementType: string;
  supportedStyles: string[];
  children?: ReactNode;
}

export const BaseElementSettings = ({
  elementType,
  supportedStyles,
  children,
}: BaseElementSettingsProps) => {
  return (
    <div className="px-2">
      {/* Section for Color Settings */}

      {/* Section for Spacing Settings */}
      {supportedStyles.includes("spacing") && (
        <>
          <ToolbarSection
            title="Margin"
            props={["margin"]}
            summary={({ margin }: any) => {
              return `${margin[0] || 0}px ${margin[1] || 0}px ${
                margin[2] || 0
              }px ${margin[3] || 0}px`;
            }}
          >
            <div className="grid grid-cols-2 px-6 gap-2">
              {["Top", "Right", "Bottom", "Left"].map((label, index) => (
                <ToolbarItem
                  key={label}
                  propKey="margin"
                  index={index}
                  type="text"
                  full
                  label={label}
                  placeholder="Margin in px"
                />
              ))}
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
        </>
      )}

      {/* Custom Sections */}
      {children}
    </div>
  );
};
