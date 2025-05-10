import * as React from "react";
import { Switch as SwitchBaseUI } from "@base-ui-components/react/switch";
import styles from "./index.module.css";

export default function Switch({
  ...props
}: React.ComponentProps<typeof SwitchBaseUI.Root>) {
  return (
    <SwitchBaseUI.Root {...props} className={styles.Switch}>
      <SwitchBaseUI.Thumb className={styles.Thumb} />
    </SwitchBaseUI.Root>
  );
}
