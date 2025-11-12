export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 text-black">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black mb-6"></div>

      {/* Text */}
      <p className="text-lg font-medium text-gray-700">Loading, please wait...</p>
    </div>
  );
}
