import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const HOME_SCROLL_KEY = 'homeScrollPosition';

export default function RouteScrollManager() {
  const location = useLocation();
  const previousPath = useRef<string | null>(null);

  useEffect(() => {
    const currentPath = location.pathname;
    const prevPath = previousPath.current;

    if (prevPath === '/' && currentPath !== '/') {
      sessionStorage.setItem(HOME_SCROLL_KEY, String(window.scrollY));
    }

    if (currentPath === '/') {
      const storedPosition = sessionStorage.getItem(HOME_SCROLL_KEY);
      const y = storedPosition ? Number(storedPosition) : 0;
      window.scrollTo({ top: Number.isFinite(y) ? y : 0, behavior: 'auto' });
    } else if (currentPath.startsWith('/projects')) {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }

    previousPath.current = currentPath;
  }, [location.pathname]);

  return null;
}
