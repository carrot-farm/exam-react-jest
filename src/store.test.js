import reducer from "./reducer";

import { setTasks } from "./actions";

import tasks from "./fixtures/tasks";

describe("reducer", () => {
  describe("setTasks", () => {
    it("state 입력 테스트", () => {
      const initialState = {
        tasks: [],
      };

      const state = reducer(initialState, setTasks(tasks));
      expect(state.tasks).not.toHaveLength(0);
      expect(state.tasks).toHaveLength(2);
    });
  });
});
