import React from "react";
import { useSelector } from "react-redux";
import { render } from "@testing-library/react";
import ListContainer from "./ListContainer";
import tasks from "./fixtures/tasks";

// 목킹할 파일 명시
jest.mock("react-redux");

describe("ListContainer", () => {
  it("renders tasks", () => {
    // 목킹 함수 정의
    useSelector.mockImplementation((selector) =>
      selector({
        tasks,
      })
    );

    const { container } = render(<ListContainer />);

    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
