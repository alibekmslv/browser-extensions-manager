"use client";

import { useExtensions } from "../hooks/hooks";
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs";

export default function FilterExtension() {
  const { dispatch } = useExtensions();

  return (
    <Tabs defaultValue="all">
      <TabsList>
        <TabsTrigger
          value="all"
          onClick={() => dispatch({ type: "filterAll" })}
        >
          All
        </TabsTrigger>
        <TabsTrigger
          value="active"
          onClick={() => dispatch({ type: "filterActive" })}
        >
          Active
        </TabsTrigger>
        <TabsTrigger
          value="inactive"
          onClick={() => dispatch({ type: "filterInactive" })}
        >
          Inactive
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}
