"use client";
import { useState, useEffect, useRef } from "react";
import { Extension, ExtensionCard } from "./extension-card";

type Props = {
  data: Extension[];
};

type ActiveTab = "all" | "active" | "inactive";

export function BrowserExtensions({ data }: Props) {
  const [extensions, setExtensions] = useState(data);
  const [activeTab, setActiveTab] = useState<ActiveTab>("all");
  const [visibleExtensions, setVisibleExtensions] = useState<Set<string>>(
    new Set(),
  );
  const previousTabRef = useRef<ActiveTab>("all");

  // We update visibleExtensions on tab change
  useEffect(() => {
    if (activeTab !== previousTabRef.current) {
      const newVisibleExtensions = new Set<string>();

      extensions.forEach((extension) => {
        if (activeTab === "all") {
          newVisibleExtensions.add(extension.name);
        } else if (activeTab === "active" && extension.isActive) {
          newVisibleExtensions.add(extension.name);
        } else if (activeTab === "inactive" && !extension.isActive) {
          newVisibleExtensions.add(extension.name);
        }
      });

      setVisibleExtensions(newVisibleExtensions);
      previousTabRef.current = activeTab;
    }
  }, [activeTab, extensions]);

  // Initilizing visibleExtension on first load
  useEffect(() => {
    const initialVisible = new Set<string>();
    extensions.forEach((extension) => {
      initialVisible.add(extension.name);
    });
    setVisibleExtensions(initialVisible);
  }, []);

  const toggleExtension = (name: Extension["name"]) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.name === name ? { ...ext, isActive: !ext.isActive } : ext,
      ),
    );
  };

  const deleteExtension = (name: Extension["name"]) => {
    setExtensions((prev) => prev.filter((ext) => ext.name !== name));
    setVisibleExtensions((prev) => {
      const newSet = new Set(prev);
      newSet.delete(name);
      return newSet;
    });
  };

  const getFilteredExtensions = () => {
    return extensions.filter((extension) => {
      // We show extension if it's in visibleExtensions
      return visibleExtensions.has(extension.name);
    });
  };

  const filteredExtensions = getFilteredExtensions();

  return (
    <>
      <div className="list-control">
        <h1 className="text-1">Extensions List</h1>
        <div className="filter">
          <button
            className={`filter-tab${activeTab === "all" ? " filter-tab--active" : ""}`}
            onClick={() => setActiveTab("all")}
            type="button"
          >
            All
          </button>
          <button
            className={`filter-tab${
              activeTab === "active" ? " filter-tab--active" : ""
            }`}
            onClick={() => setActiveTab("active")}
            type="button"
          >
            Active
          </button>
          <button
            className={`filter-tab${
              activeTab === "inactive" ? " filter-tab--active" : ""
            }`}
            onClick={() => setActiveTab("inactive")}
            type="button"
          >
            Inactive
          </button>
        </div>
      </div>
      <div className="extension-showcase">
        {filteredExtensions.map((extension) => (
          <ExtensionCard
            key={extension.name}
            onRemove={() => deleteExtension(extension.name)}
            onSwitch={() => toggleExtension(extension.name)}
            extension={extension}
          />
        ))}
      </div>
    </>
  );
}
