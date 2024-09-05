const ProcessingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-gray-300 rounded-full" />
        <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 rounded-full border-emerald-400 animate-spin" />
        <div className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 left-1/2 bg-emerald-500" />
        <div className="sr-only">Processing</div>
      </div>
    </div>
  );
};

export default ProcessingSpinner;
