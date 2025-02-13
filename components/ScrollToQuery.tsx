"use client";
import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function ScrollToQuery() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const scrollTo = searchParams ? searchParams.get("scrollTo") : null;
    if (scrollTo) {
      // For off-page navigation we allow a delay for content to load.
      const timer = setTimeout(() => {
        const element = document.getElementById(scrollTo);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          // Remove the query parameter from the URL
          const url = new URL(window.location.href);
          url.searchParams.delete("scrollTo");
          window.history.replaceState(null, "", url.toString());
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  return null;
}
