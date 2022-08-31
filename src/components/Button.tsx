import { MouseEvent, PropsWithChildren } from 'react';

interface Props {
  disabled?: boolean,
  onClick?:(e: MouseEvent<HTMLButtonElement>) => void;
}

export default function Button({
  disabled, children, onClick, ...rest
}: PropsWithChildren<Props>) {
  return (
    <button type="button" disabled={disabled} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
