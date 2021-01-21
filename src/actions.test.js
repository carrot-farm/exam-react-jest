import configureStore from "redux-mock-store";

import thunk from "redux-thunk";

import { fetchTasks } from "./apis";

import { loadTasks } from "./actions";

jest.mock("./apis");

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe("loadTasks", () => {
  const tasks = [
    { id: 1, title: "아무 일도 하기 싫다" },
    { id: 2, title: "건물 매입" },
  ];

  beforeEach(() => {
    // 비동기 요청에 대한 응답을 목킹
    fetchTasks.mockResolvedValue(tasks);
  });

  it("set tasks", async () => {
    // 목 스토어
    const store = mockStore({
      tasks: [],
    });

    // 비동기 액션
    await store.dispatch(loadTasks());

    const actions = store.getActions();

    //
    expect(actions).toEqual([
      { type: "setTasks", payload: { tasks: [] } },
      { type: "setTasks", payload: { tasks } },
    ]);
  });
});
