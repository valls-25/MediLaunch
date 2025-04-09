import { useNode } from "@craftjs/core";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";
import { ToolbarSectionProps } from "./Toolbar.types";

// Define props type for better type safety

export const ToolbarSection: React.FC<ToolbarSectionProps> = ({
  title,
  props,
  summary,
  children,
}) => {
  const { nodeProps } = useNode((node) => ({
    nodeProps:
      props &&
      props.reduce((res: Record<string, any>, key: string) => {
        res[key] = node.data.props[key] || null;
        return res;
      }, {}),
  }));
  return (
    <Accordion type="multiple">
      <AccordionItem value="value_1">
        <AccordionTrigger>
          <div className="px-6 w-full flex justify-between">
            <h5 className="text-sm text-light-gray-1 text-left font-medium text-dark-gray">
              {title}
            </h5>
            {summary && props ? (
              <h5 className="text-light-gray-2 text-sm text-right text-dark-blue">
                {summary(
                  props.reduce((acc: Record<string, any>, key: string) => {
                    acc[key] = nodeProps[key];
                    return acc;
                  }, {})
                )}
              </h5>
            ) : null}
          </div>
        </AccordionTrigger>
        <AccordionContent>
          <div className="grid grid-cols-1 gap-1">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
