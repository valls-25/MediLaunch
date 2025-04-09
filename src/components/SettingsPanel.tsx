"use client";
import React, { useState } from "react";
import { useEditor } from "@craftjs/core";
import Toolbar from "./Toolbar";
import { SidebarItem } from "./SidebarItem";
import { CustomizeIcon } from "./Icons/customize";
import { LayersIcon } from "./Icons/layers";
import { Layers } from "@craftjs/layers";

export const SettingsPanel = () => {
  const { selected, active, related } = useEditor((state, query) => {
    const currentNodeId = query.getEvent("selected").last();
    let selected;
    const currentlySelectedNodeId = query.getEvent("selected").first();
    if (currentNodeId && state.nodes[currentNodeId]) {
      const currentNode = state.nodes[currentNodeId];

      if (!currentNode) {
        return;
      }

      selected = {
        id: currentNodeId,
        name: currentNode?.data?.name,
        settings: currentNode?.related?.["settings"],
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected,
      active: currentlySelectedNodeId,
      related:
        currentlySelectedNodeId && state.nodes[currentlySelectedNodeId].related,
    };
  });
  const [layerVisible, setLayerVisible] = useState(true);
  const [toolbarVisible, setToolbarVisible] = useState(true);

  return (
    <div className={`sidebar w-72 transition-opacity h-full bg-white mr-0 `}>
      <div className="flex flex-col h-full ">
        <SidebarItem
          icon={
            <CustomizeIcon
              props={{ className: "w-4 h-4 mr-2", fill: " #707070" }}
            />
          }
          title="Customize"
          height={!layerVisible ? "full" : "1/2"}
          visible={toolbarVisible}
          onChange={(val) => setToolbarVisible(val)}
          className="overflow-auto"
        >
          <Toolbar selected={selected} active={active} related={related} />
        </SidebarItem>
        <SidebarItem
          icon={<LayersIcon props={{ className: "w-4 h-4 mr-2" }} />}
          title="Layers"
          height={!toolbarVisible ? "full" : "1/2"}
          visible={layerVisible}
          onChange={(val) => setLayerVisible(val)}
        >
          <div className="">
            <Layers expandRootOnLoad={true} />
          </div>
        </SidebarItem>
        {/* <Carbonads /> */}
      </div>
    </div>
  );
};
