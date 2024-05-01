const TaskItemSkeleton = () => {
  return (
    <div className="relative max-w-[350px] rounded-lg shadow-md bg-gray-200 text-white flex flex-col w-full gap-6 itemx-center justify-between lg:p-4 p-3">
      <div className="flex items-center justify-between gap-6 font-bold text-lg mb-2">
        <div className="flex gap-4">
          <div className="animate-pulse h-5 w-5 rounded-full bg-white"></div>
          <div className="animate-pulse h-5 w-32 rounded bg-white"></div>
        </div>
        <div className="animate-pulse h-5 w-10 rounded bg-white"></div>
      </div>

      <div className="flex flex-col justify-between">
        <div className="animate-pulse h-12 w-60 rounded bg-white"></div>
      </div>
      <div className="flex justify-end gap-2">
        <div className="animate-pulse h-6 w-6 rounded bg-white"></div>
        <div className="animate-pulse h-6 w-6 rounded bg-white"></div>
      </div>
    </div>
  );
};

export default TaskItemSkeleton;
