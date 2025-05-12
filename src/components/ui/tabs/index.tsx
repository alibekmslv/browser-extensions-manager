import * as React from "react";
import { Tabs as TabsBaseUI } from "@base-ui-components/react/tabs";

type TabsProps = React.ComponentProps<typeof TabsBaseUI.Root>;
export function Tabs({ className, ...props }: TabsProps) {
  return <TabsBaseUI.Root className={className} {...props} />;
}

type TabsListProps = React.ComponentProps<typeof TabsBaseUI.List>;
export function TabsList({ className, ...props }: TabsListProps) {
  return <TabsBaseUI.List className={className} {...props} />;
}

type TabsTriggerProps = React.ComponentProps<typeof TabsBaseUI.Tab>;
export function TabsTrigger({ className, ...props }: TabsTriggerProps) {
  return <TabsBaseUI.Tab className={className} {...props} />;
}

type TabsContentProps = React.ComponentProps<typeof TabsBaseUI.Panel>;
export function TabsContent({ className, ...props }: TabsContentProps) {
  return <TabsBaseUI.Panel className={className} {...props} />;
}
