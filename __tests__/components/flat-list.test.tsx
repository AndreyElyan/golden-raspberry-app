import { FlatList } from "@/components/flat-list";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";

const MockItem = ({ data }: { data: any }) => <div>{data.title}</div>;
const MockHeader = () => <div>Header</div>;
const MockFooter = () => <div>Footer</div>;

test("renders items correctly", () => {
  const items = [{ title: "Item 1" }, { title: "Item 2" }];
  render(
    <FlatList
      items={items}
      RenderItem={MockItem}
      ListEmptyComponent={() => <div>Empty</div>}
      ListHeaderComponent={MockHeader}
      ListFooterComponent={MockFooter}
    />,
  );
});

test("renders empty component", () => {
  render(
    <FlatList
      items={[]}
      RenderItem={MockItem}
      ListEmptyComponent={() => <div>Empty</div>}
      ListHeaderComponent={MockHeader}
      ListFooterComponent={MockFooter}
    />,
  );
});

test("renders header and footer", () => {
  render(
    <FlatList
      items={null}
      RenderItem={MockItem}
      ListHeaderComponent={MockHeader}
      ListFooterComponent={MockFooter}
    />,
  );
});

test("renders only header", () => {
  render(
    <FlatList
      items={null}
      RenderItem={MockItem}
      ListHeaderComponent={undefined}
      ListFooterComponent={undefined}
      ListEmptyComponent={undefined}
    />,
  );
});
