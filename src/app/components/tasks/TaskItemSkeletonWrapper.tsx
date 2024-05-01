import TaskItemSkeleton from "./TaskItemSkeleton";

const TaskItemSkeletonWrapper = () => {
  return (
    <div className="flex justify-center items-center lg:gap-8 gap-6 xl:justify-start lg:pb-8 pb-6 flex-wrap mt-20">
      {Array(5)
        .fill(null)
        .map((_, index) => (
          <TaskItemSkeleton key={index} />
        ))}
    </div>
  );
};

export default TaskItemSkeletonWrapper;
