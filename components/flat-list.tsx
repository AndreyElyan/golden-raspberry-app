import React from "react";

interface FlatListProps {
  items: any[] | null | undefined;
  RenderItem: ({ data, key }: { data: any; key: number }) => JSX.Element;
  ListHeaderComponent?: () => JSX.Element | null;
  ListFooterComponent?: () => JSX.Element | null;
  ListEmptyComponent?: () => JSX.Element | null;
}

export const FlatList = ({
  items,
  RenderItem,
  ListHeaderComponent,
  ListFooterComponent,
  ListEmptyComponent,
}: FlatListProps) => {
  if (Array.isArray(items)) {
    const render = items.map((v, i) => RenderItem({ data: v, key: i }));

    if (render.length) {
      return (
        <React.Fragment>
          {ListHeaderComponent ? ListHeaderComponent() : null}
          {render}
          {ListFooterComponent ? ListFooterComponent() : null}
        </React.Fragment>
      );
    }

    return (
      <React.Fragment>
        {ListHeaderComponent ? ListHeaderComponent() : null}
        {ListEmptyComponent ? ListEmptyComponent() : null}
        {ListFooterComponent ? ListFooterComponent() : null}
      </React.Fragment>
    );
  }

  if (ListHeaderComponent || ListEmptyComponent || ListFooterComponent) {
    return (
      <React.Fragment>
        {ListHeaderComponent ? ListHeaderComponent() : null}
        {ListEmptyComponent ? ListEmptyComponent() : null}
        {ListFooterComponent ? ListFooterComponent() : null}
      </React.Fragment>
    );
  }
  return null;
};
