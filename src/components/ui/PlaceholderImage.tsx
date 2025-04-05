import React from 'react';

interface PlaceholderImageProps {
  title: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function PlaceholderImage({ 
  title, 
  width = 600, 
  height = 400, 
  className = '' 
}: PlaceholderImageProps) {
  // Generate a consistent color based on the title
  const getColorFromTitle = (title: string) => {
    const colors = [
      { bg: 'bg-blue-600', text: 'text-white' },
      { bg: 'bg-purple-600', text: 'text-white' },
      { bg: 'bg-green-600', text: 'text-white' },
      { bg: 'bg-red-600', text: 'text-white' },
      { bg: 'bg-amber-500', text: 'text-white' },
      { bg: 'bg-indigo-600', text: 'text-white' },
      { bg: 'bg-pink-600', text: 'text-white' },
      { bg: 'bg-teal-600', text: 'text-white' },
    ];
    
    // Create a simple hash from the title
    const hash = title.split('').reduce((acc, char) => {
      return char.charCodeAt(0) + ((acc << 5) - acc);
    }, 0);
    
    // Use the hash to select a color
    const colorIndex = Math.abs(hash) % colors.length;
    return colors[colorIndex];
  };
  
  const color = getColorFromTitle(title);
  
  // Truncate title for display
  const displayTitle = title.length > 30 ? title.substring(0, 27) + '...' : title;
  
  return (
    <div 
      className={`${color.bg} ${className} flex items-center justify-center overflow-hidden`}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <div className="p-8 text-center max-w-[85%] mx-auto">
        <h3 className={`${color.text} text-2xl font-bold mb-4 drop-shadow-lg tracking-wide`}>
          {displayTitle}
        </h3>
        <div className={`${color.text} text-sm font-medium opacity-90 drop-shadow-md tracking-wide`}>
          Blog Article
        </div>
      </div>
    </div>
  );
} 