'use client';

import { useState } from 'react';

interface GalleryItem {
  id: string;
  url: string;
  description: string;
}

export default function GalleryClient({ items }: { items: GalleryItem[] }) {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  if (items.length === 0) {
    return (
      <div className="text-center py-20 text-gray-500">
        No gallery images available at the moment.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {items.map((item) => (
          <div 
            key={item.id} 
            className="aspect-square relative overflow-hidden cursor-pointer group rounded"
            onClick={() => setSelectedItem(item)}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={item.url} 
              alt={item.description}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4 text-center">
              <span className="text-white font-semibold text-sm line-clamp-3">
                {item.description}
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedItem && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex flex-col items-center justify-center p-4 sm:p-10"
          onClick={() => setSelectedItem(null)}
        >
          <button 
            className="absolute top-5 right-5 text-white bg-black/50 hover:bg-black w-10 h-10 rounded-full flex items-center justify-center text-xl transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            ✕
          </button>
          
          <div 
            className="max-w-5xl max-h-[80vh] w-full relative flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src={selectedItem.url} 
              alt={selectedItem.description}
              className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
            {selectedItem.description && (
              <div className="mt-6 bg-white/10 backdrop-blur-md px-6 py-4 rounded-xl max-w-3xl w-full text-center">
                <p className="text-white text-lg font-medium">{selectedItem.description}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
