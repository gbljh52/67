import { useContext, useEffect, useState } from "react";
import { FavoritesContext } from "../FavoriteContext";
export function useLoad<T>(
  load: (key: number, signal: AbortSignal) => T | Promise<T>,
  key: number,
) {
  const [state, setState] = useState<{
    data: T | null;
    error: {message?: string} | null;
    loading: boolean;
  }>({
    data: null, error: null, loading: true,
  });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const controller = new AbortController();
    setState({
      data: null, error: null , loading: true,
    });
    async function start() {
      try {
        const data = await load(
          key, controller.signal
        );
        if (!controller.signal.aborted)
          setState({
            data, error: null, loading: false,
          });
      } catch (error: any) {
        if (!controller.signal.aborted)
          setState({
            data: null, error, loading: false,
          });
      }
    }
    start();
    return () => controller.abort();
  }, [load, key, attempt]);
  const retry = () => setAttempt(n => n + 1);
  return { ...state, retry };
}