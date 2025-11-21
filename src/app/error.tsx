"use client";

export default function ErrorPage({ error, reset }: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
      <h1 className="text-4xl font-bold mb-4">Something went wrong</h1>
      <p className="text-gray-600 mb-6">{error.message}</p>
      
      <button
        onClick={() => reset()}
        className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition"
      >
        Try Again
      </button>
    </div>
  );
}
