import * as React from "react";

export const useFocus = () => {
  const ref = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => {
    ref.current?.focus();
  }, []);
  return ref;
};
