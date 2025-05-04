import { RatingProvider } from "@site/src/components/RatingContext";
import MDXComponents from "@theme-original/MDXComponents";

export default {
  ...MDXComponents,
  wrapper: ({ children }) => <RatingProvider>{children}</RatingProvider>,
};
