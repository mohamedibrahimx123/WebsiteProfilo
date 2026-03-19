import React from "react";

function NotFound() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-4xl font-black text-rose-400">404 - Page Not Found</h1>
        <p className="mt-3 text-white/70">The page you're looking for does not exist.</p>
      </div>
    </div>
  );
}
export default NotFound;