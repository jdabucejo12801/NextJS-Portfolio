import { Button as HeroButton } from "@heroui/react";

type Props = React.ComponentProps<typeof HeroButton>;

export function Button(props: Props) {
  return <HeroButton  {...props} />;
}