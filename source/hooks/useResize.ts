import { useEffect, useRef } from 'react';

interface IParams {
  width: number,
  height: number
}

export const useResize = ( cb = () => {} ) => {
  const callback = useRef(({ width, height }: IParams) => {});

  useEffect(() => {
    callback.current = cb;
  }, [cb])

  useEffect(() => {
    const handleResize = () => {
      callback.current && callback.current({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    window.addEventListener('resize', handleResize);
    return () => { window.removeEventListener('resize', handleResize) }
  }, [])
}