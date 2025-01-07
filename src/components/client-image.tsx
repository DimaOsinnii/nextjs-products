'use client';

import Image, { ImageProps } from 'next/image';
import { useEffect, useState } from 'react';

interface ClientImageProps extends ImageProps {
  fallbackSrc?: string;
}

export default function ClientImage(props: ClientImageProps) {
  const { fallbackSrc = '/image-not-found.png', src, alt, ...imageProps } = props;
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, []);

  return <Image alt={alt} src={error ? fallbackSrc : src} onError={() => setError(true)} {...imageProps} />;
}
