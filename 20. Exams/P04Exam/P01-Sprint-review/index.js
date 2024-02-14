function solve(arr) {
  //{assignee}:{taskId}:{title}:{status}:{estimatedPoints}

  let data = [];

  let n = arr.shift();

  for (let index = 0; index < n; index++) {
    const [assignee, taskId, title, status, estimatedPoints] =
      arr[index].split(":");

    const assigneeIndex = data.findIndex((item) => item.assignee === assignee);
    if (assigneeIndex === -1) {
      data.push({
        assignee,
        tasks: [
          {
            taskId,
            title,
            status,
            estimatedPoints,
          },
        ],
      });
    } else {
      data[assigneeIndex].tasks.push({
        taskId,
        title,
        status,
        estimatedPoints,
      });
    }
  }

  for (let index = n; index < arr.length; index++) {
    const [
      command,
      assignee,
      taskIdOrIndex,
      title,
      newStatus,
      estimatedPoints,
    ] = arr[index].split(":");

    switch (command) {
      case "Add New":
        // Add New:{assignee}:{taskId}:{title}:{status}:{estimatedPoints}"
        const assigneeIndex = data.findIndex(
          (item) => item.assignee === assignee
        );
        if (assigneeIndex === -1) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          data[assigneeIndex].tasks.push({
            taskId: taskIdOrIndex,
            title: title,
            status: newStatus,
            estimatedPoints: Number(estimatedPoints),
          });
        }
        break;

      case "Change Status":
        // Change Status:{assignee}{taskId}:{newStatus}"
        const taskIndex = data.findIndex((item) => item.assignee === assignee);
        if (taskIndex === -1) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          const taskToUpdate = data[taskIndex].tasks.find(
            (task) => task.taskId === taskIdOrIndex
          );
          if (!taskToUpdate) {
            console.log(
              `Task with ID ${taskIdOrIndex} does not exist for ${assignee}!`
            );
          } else {
            taskToUpdate.status = title;
          }
        }
        break;

      case "Remove Task":
        // Remove Task:{assignee}{index}":
        const removeTaskIndex = data.findIndex(
          (item) => item.assignee === assignee
        );
        if (removeTaskIndex === -1) {
          console.log(`Assignee ${assignee} does not exist on the board!`);
        } else {
          const indexToRemove = Number(taskIdOrIndex);
          if (
            indexToRemove < 0 ||
            indexToRemove >= data[removeTaskIndex].tasks.length
          ) {
            console.log("Index is out of range!");
          } else {
            data[removeTaskIndex].tasks.splice(indexToRemove, 1);
          }
        }
        break;
    }
  }

  let toDoTasksTotalPoints = 0;
  let inProgressTasksTotalPoints = 0;
  let codeReviewTasksTotalPoints = 0;
  let doneTasksTotalPoints = 0;

  data.forEach((assigneeTasks) => {
    assigneeTasks.tasks.forEach((task) => {
      switch (task.status) {
        case "ToDo":
          toDoTasksTotalPoints += Number(task.estimatedPoints);
          break;
        case "In Progress":
          inProgressTasksTotalPoints += Number(task.estimatedPoints);
          break;
        case "Code Review":
          codeReviewTasksTotalPoints += Number(task.estimatedPoints);
          break;
        case "Done":
          doneTasksTotalPoints += Number(task.estimatedPoints);
          break;
        default:
          break;
      }
    });
  });

  console.log(`ToDo: ${toDoTasksTotalPoints}pts`);
  console.log(`In Progress: ${inProgressTasksTotalPoints}pts`);
  console.log(`Code Review: ${codeReviewTasksTotalPoints}pts`);
  console.log(`Done Points: ${doneTasksTotalPoints}pts`);

  if (
    doneTasksTotalPoints >=
    toDoTasksTotalPoints +
      inProgressTasksTotalPoints +
      codeReviewTasksTotalPoints
  ) {
    console.log("Sprint was successful!");
  } else {
    console.log("Sprint was unsuccessful...");
  }
}

solve([
  "4",
  "Kiril:BOP-1213:Fix Typo:Done:1",
  "Peter:BOP-1214:New Products Page:In Progress:2",
  "Mariya:BOP-1215:Setup Routing:ToDo:8",
  "Georgi:BOP-1216:Add Business Card:Code Review:3",
  "Add New:Sam:BOP-1237:Testing Home Page:Done:3",
  "Change Status:Georgi:BOP-1216:Done",
  "Change Status:Will:BOP-1212:In Progress",
  "Remove Task:Georgi:3",
  "Change Status:Mariya:BOP-1215:Done",
]);
