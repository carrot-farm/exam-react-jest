import { render } from "@testing-library/react";

import { useDispatch, useSelector } from "react-redux";

import App from "./App";

import tasks from "./fixtures/tasks";

// 목킹할 파일 명시
jest.mock("react-redux");

describe("App", () => {
  it("renders tasks", () => {
    const dispatch = jest.fn();

    useDispatch.mockImplementation(() => dispatch);

    // 목킹 함수 정의
    useSelector.mockImplementation((selector) =>
      selector({
        tasks,
      })
    );

    const { container } = render(<App />);

    // console.log("> ", args);
    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
