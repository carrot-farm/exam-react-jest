import { render, fireEvent } from "@testing-library/react";
import context from "jest-plugin-context";

import List from "./List";

describe("List", () => {
  const handleClick = jest.fn(); // 목킹 함수

  function renderList(tasks) {
    return render(<List tasks={tasks} onClick={handleClick} />);
  }

  context("with tasks ", () => {
    const tasks = [
      { id: 1, title: "아무 일도 하기 싫다" },
      { id: 2, title: "건물 매입" },
    ];

    it("renders tasks", () => {
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("아무 일도 하기 싫다");
      expect(container).toHaveTextContent("건물 매입");
    });

    it("renders '완료' 버튼 클릭 시 task 삭제", () => {
      const { getAllByText } = renderList(tasks);
      const buttons = getAllByText("완료"); // 버튼 선택

      fireEvent.click(buttons[0]); // 이벤트 발생
      // expect(handleClick).toBeCalled(); // 이벤트 발생 확인
      expect(handleClick).toBeCalledWith(1); // 이벤트 발생 구체적 확인
    });
  });

  context("no tasks message", () => {
    it("renders tasks", () => {
      const tasks = [];
      const { container } = renderList(tasks);

      expect(container).toHaveTextContent("할 일이 없어요.");
    });
  });
});
