import { useCallback, useEffect } from "react";
import { toast } from "./ui/use-toast";
import { ResetToaster } from "./ui/resetToaster";
import { useRouter } from "next/router";

export default function KeyboardNavigation({}: {}) {

  const location = useRouter();

  const handleKeyPress = useCallback(async (event: any) => {
    // Ignore if the target is an input field or if cmd and shift keys are pressed
    if (
      event.target instanceof HTMLInputElement ||
      (event.metaKey && event.shiftKey)
    ) {
      return;
    }

    switch (event.key) {
    }
  }, []);

  useEffect(() => {
    // attach the event listener
    document.addEventListener("keydown", handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  return <ResetToaster />;
}
