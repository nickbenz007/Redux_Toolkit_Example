const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900">
      <div className="flex spacce-x-4">
        <div className="h-4 w-4 rounded-full animate-ping delay-200 bg-blue-500"></div>
        <div className="h-4 w-4 rounded-full animate-ping delay-150 bg-blue-500 mx-2"></div>
        <div className="h-4 w-4 rounded-full animate-ping delay-300 bg-blue-500"></div>
      </div>
      <div className="mt-4 text-center">
        <p className="font-IBM-Plex-Mono text-2xl font-semibold text-gray-50">
          Loading...
        </p>
        <p className="text-lg text-gray-50 font-thin font-IBM-Plex-Mono">
          Thank you for your patience we are almost there :)
        </p>
      </div>
    </div>
  );
};

export default Loader;
