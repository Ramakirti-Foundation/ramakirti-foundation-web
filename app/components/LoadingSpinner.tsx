export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] space-y-4">
      <div className="w-12 h-12 border-4 border-[#6E1110]/20 border-t-[#6E1110] rounded-full animate-spin"></div>
      <p className="text-gray-500 font-medium animate-pulse">Loading content...</p>
    </div>
  );
}
