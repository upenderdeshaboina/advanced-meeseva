"use client"; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}) {
  useEffect(() => {
    // Log the error to a reporting service
    console.error(error);
  }, [error]);

  return (
    <div style={{ textAlign: 'center', padding: '4rem' }}>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
}