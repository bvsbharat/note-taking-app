export default function EmptyState({ searchQuery = '' }: { searchQuery?: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16 text-gray-400 mb-4"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
      
      {searchQuery ? (
        <>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
            No notes found
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            We couldn't find any notes matching "{searchQuery}"
          </p>
        </>
      ) : (
        <>
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-1">
            No notes yet
          </h3>
          <p className="text-gray-500 dark:text-gray-400">
            Create your first note by typing in the form above
          </p>
        </>
      )}
    </div>
  );
}