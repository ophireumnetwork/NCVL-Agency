import React from 'react';
import { X, ZoomIn, Download, ExternalLink } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageTitle: string;
  imageCategory?: string;
  imageDescription?: string;
  onClose: () => void;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  imageSrc,
  imageTitle,
  imageCategory,
  imageDescription,
  onClose,
}) => {
  if (!isOpen || !imageSrc) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
      {/* CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 text-zinc-300 hover:text-white bg-zinc-900/80 hover:bg-zinc-800 rounded-full border border-zinc-700 transition-colors"
      >
        <X className="w-6 h-6" />
      </button>

      <div className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center justify-center">
        {/* IMAGE */}
        <div className="relative rounded-xl overflow-hidden border border-zinc-700/80 shadow-2xl bg-black max-h-[75vh]">
          <img
            src={imageSrc}
            alt={imageTitle}
            className="w-auto h-auto max-h-[75vh] object-contain mx-auto"
          />
        </div>

        {/* METADATA BAR */}
        <div className="w-full mt-4 p-4 bg-zinc-900/90 border border-zinc-800 rounded-lg text-left flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
          <div>
            {imageCategory && (
              <span className="text-[10px] uppercase font-tech tracking-wider text-[#C89B2C] font-semibold">
                {imageCategory}
              </span>
            )}
            <h4 className="font-heading font-bold text-white text-base mt-0.5">
              {imageTitle}
            </h4>
            {imageDescription && (
              <p className="text-zinc-400 text-xs mt-1 max-w-2xl">
                {imageDescription}
              </p>
            )}
          </div>

          <div className="flex items-center space-x-2 flex-shrink-0">
            <a
              href={imageSrc}
              target="_blank"
              rel="noreferrer"
              className="px-3 py-1.5 bg-zinc-800 hover:bg-zinc-700 text-zinc-300 border border-zinc-700 rounded flex items-center transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5 mr-1" />
              Open Original
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
