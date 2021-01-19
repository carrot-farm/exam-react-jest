import reducer from "./reducer";

import { setTasks } from "./actions";

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
});
