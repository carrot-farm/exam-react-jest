import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { render, fireEvent } from "@testing-library/react";
import ListContainer from "./ListContainer";
import tasks from "./fixtures/tasks";

// 목킹할 파일 명시
jest.mock("react-redux");

describe("ListContainer", () => {
  const dispatch = jest.fn();

  it("renders tasks", () => {
    // `dispatch` 목킹 함수 정의
    useDispatch.mockImplementation(() => dispatch);

    // `useSelector` 목킹 함수 정의
    useSelector.mockImplementation((selector) =>
      selector({
        tasks,
      })
    );

    const { container, getAllByText } = render(<ListContainer />);
    const buttons = getAllByText("완료"); // 버튼 선택

    expect(container).toHaveTextContent("아무 일도 하기 싫다"); // 랜더링 확인

    fireEvent.click(buttons[0]); // 이벤트 발생
    // expect(dispatch).toBeCalled(); // 이벤트 발생 확인
    // 이벤트 발생 구체적으로 확인
    expect(dispatch).toBeCalledWith({
      type: "deleteTask",
      payload: { id: 1 },
    });
  });
});
