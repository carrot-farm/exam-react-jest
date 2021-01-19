import { render } from "@testing-library/react";

import List from "./List";

import tasks from "./fixtures/tasks";

describe("List", () => {
  it("renders tasks", () => {
    const { container } = render(<List tasks={tasks} />);

    // console.log("> ", args);
    expect(container).toHaveTextContent("아무 일도 하기 싫다");
  });
});
