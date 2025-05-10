import * as React from "react";
import { Switch } from "@base-ui-components/react/switch";
import styles from "./index.module.css";

export default function ({
  ...props
}: React.ComponentProps<typeof Switch.Root>) {
  return (
    <Switch.Root {...props} className={styles.Switch}>
      <Switch.Thumb className={styles.Thumb} />
    </Switch.Root>
  );
}
