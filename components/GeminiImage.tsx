import React, { useState, useEffect } from 'react';
import { generateImage, AspectRatio } from '../services/geminiService';
import { Loader2, Image as ImageIcon } from 'lucide-react';

interface GeminiImageProps {
  prompt: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  aspectRatio?: AspectRatio;
}

export const GeminiImage: React.FC<GeminiImageProps> = ({ prompt, fallbackSrc, alt, className, aspectRatio = "16:9" }) => {
  const [imgSrc, setImgSrc] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    let isMounted = true;

    const fetchImage = async () => {
      // If no API key, skip generation and use fallback immediately to avoid broken UI
      if (!process.env.API_KEY) {
        if (isMounted) {
          setLoading(false);
          setError(true);
        }
        return;
      }

      try {
        const generated = await generateImage(prompt, aspectRatio as AspectRatio);
        if (isMounted) {
          if (generated) {
            setImgSrc(generated);
          } else {
            setError(true);
          }
        }
      } catch (err) {
        if (isMounted) setError(true);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchImage();

    return () => {
      isMounted = false;
    };
  }, [prompt, aspectRatio]);

  if (loading) {
    return (
      <div className={`bg-gray-200 flex items-center justify-center animate-pulse ${className}`}>
        <div className="flex flex-col items-center text-gray-400">
          <Loader2 className="w-8 h-8 animate-spin mb-2" />
          <span className="text-xs uppercase tracking-wider">Generating K-Visual...</span>
        </div>
      </div>
    );
  }

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={alt}
      className={`object-cover ${className}`}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
};