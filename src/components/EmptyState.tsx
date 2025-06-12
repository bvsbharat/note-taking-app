import React from 'react';
import Image from 'next/image';

interface EmptyStateProps {
  message?: string;
}

const EmptyState: React.FC<EmptyStateProps> = ({
  message = "Create your first note by typing in the form above",
}) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 relative w-24 h-24">
        <Image
          src="/file.svg"
          alt="Empty notes"
          fill
          className="object-contain"
          priority
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">No notes yet</h3>
      <p className="text-gray-500 dark:text-gray-400">
        Create your first note by typing in the form above
      </p>
    </div>
  );
};

export default EmptyState;
