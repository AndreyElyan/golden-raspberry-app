import React from "react";

interface FlatListProps {
  items: any[];
  RenderItem: ({ data, key }: { data: any; key: number }) => JSX.Element;
  ListHeaderComponent?: () => JSX.Element;
  ListFooterComponent?: () => JSX.Element;
  ListEmptyComponent?: () => JSX.Element;
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
