# `@hookage/use-title`

> React Hooks to update your document's title

## Install

### npm

```shell
npm install --save @hookage/use-title
```

### Yarn

```shell
yarn add @hookage/use-title
```

## Usage

```jsx
import React from "react";
import useTitle from "@hookage/use-title";

const UseTitle = () => {
  const titleUpdater = useTitle("Loading...");
  setTimeout(() => titleUpdater("Home"), 5000);
  return (
    <div className="App">
      <div>hi</div>
    </div>
  );
};

export default UseTitle;
```

## License

MIT