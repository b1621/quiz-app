const Loader = () => {
  return (
    <div>
      <div>Loading ....</div>
      <div className="flex justify-center items-center mt-10">
        <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mx-1"></div>
        <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle mx-1"></div>
        <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce red-circle mx-1"></div>
      </div>
    </div>
  );
};

export default Loader;
