import React, { useEffect, ReactNode } from "react";
import { Toolbox } from "./Toolbox";
import { Topbar } from "./TopBar";
import { SettingsPanel } from "./SettingsPanel";
import { useEditor } from "@craftjs/core";

export const ViewPort = ({ children }: { children: ReactNode }) => {
  const {
    connectors,
    isEnabled,
    actions: { setOptions },
  } = useEditor((state) => ({
    isEnabled: state.options.enabled,
  }));

  useEffect(() => {
    if (!window) {
      return;
    }

    window.requestAnimationFrame(() => {
      // Notify doc site
      window.parent.postMessage(
        {
          LANDING_PAGE_LOADED: true,
        },
        "*"
      );

      setTimeout(() => {
        setOptions((options) => {
          options.enabled = true;
        });
      }, 200);
    });
  }, [setOptions]);

  return (
    <div className="flex flex-col h-full viewport">
      <div className={`flex h-full overflow-hidden flex-row w-full fixed `}>
        <div
          className={` transition-all duration-700  ${
            isEnabled
              ? "opacity-100 animate-in block"
              : "opacity-0  hidden animate-out"
          }`}
        >
          <Toolbox />
        </div>
        <div className="page-container flex flex-col flex-1">
          <Topbar />
          <div
            className="craftjs-renderer flex-1 h-[600px] w-full transition overflow-auto"
            ref={(ref) => {
              if (ref) connectors.select(connectors.hover(ref, ""), "");
            }}
          >
            <div className="relative w-full items-center overflow-auto p-8  bg-gray-50">
              {children}
            </div>
          </div>
        </div>
        <div
          className={` transition-all duration-700  ${
            isEnabled
              ? "opacity-100 animate-in block"
              : "opacity-0  hidden animate-out"
          }`}
        >
          <SettingsPanel />
        </div>
      </div>
    </div>
  );
};
