import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Footer from "@/components/organisms/Footer";

const renderComponent = () => {
  render(<Footer />);
};

beforeEach(() => {
  renderComponent();
});

describe("1:レンダリングテスト", () => {
  test("1-1:githubのリンクがあるか", () => {
    const taguchiGithubLink = screen.getAllByRole("link", { name: "TH" });
    const miyamotoGithubLink = screen.getByRole("link", { name: "MK" });

    expect(taguchiGithubLink);
    expect(miyamotoGithubLink);
  });
});
