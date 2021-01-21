import reducer from "./reducer";

import { setTasks, deleteTask } from "./actions";

import tasks from "./fixtures/tasks";

describe("reducer", () => {
  describe("setTasks", () => {
    it("changes tasks array", () => {
      // 액션 실행
      const state = reducer(
        {
          tasks: [],
        },
        setTasks(tasks)
      );

      // 배열의 길이가 `0`이 아니어야 한다.
      expect(state.tasks).not.toHaveLength(0);
    });
  });

  describe("deleteTask", () => {
    const tasks = [{ id: 1, title: "아무 일도 하기 싫다" }];

    it("removes the task from tasks", () => {
      const state = reducer({ tasks }, deleteTask(1)); // 리듀서 삭제

      expect(state.tasks).toHaveLength(0); // 빈 배열 확인
    });
  });
});
