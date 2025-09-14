import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ROUTE_TITLES: Record<string, string> = {
  "/": "Home",
  "/prayer": "Prayer Times",
  "/hadith": "Hadith",
  "/contact": "Contact",
  "/donate": "Donations",
};

export const usePageTitle = (defaultTitle = "Home") => {
  const location = useLocation();

  useEffect(() => {
    const title = ROUTE_TITLES[location.pathname] || defaultTitle;
    document.title = `GIS | ${title}`;
  }, [location.pathname, defaultTitle]);
};
