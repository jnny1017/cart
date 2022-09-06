import { ChangeEventHandler, useState } from 'react';

import {
  Name,
} from '../styles/menuStyle';

interface Props {
  id: string,
  data: Record<string, any>,
  onChange: (checked: boolean) => void,
}

export default function Checkbox({
  id, data, onChange, ...props
}: Props) {
  const [isChecked, setChecked] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { target: { checked } } = event;

    setChecked(checked);

    onChange(checked);
  };

  return (
    <label htmlFor={data.id}>
      <input
        type="checkbox"
        id={data.id}
        name={data.id}
        checked={data.isChecked ? data.isChecked : isChecked}
        onChange={(event) => handleChange(event)}
        {...props}
      />
      <Name>{data.name}</Name>
    </label>
  );
}
