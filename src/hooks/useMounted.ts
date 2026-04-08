import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

export default function useMounted() {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
