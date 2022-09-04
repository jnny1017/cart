import { useState } from 'react';

import {
  Name,
} from '../styles/menuStyle';

interface Props {
  id: string,
  disabled?: boolean,
  data: any,
}

export default function useCheckbox() {
  const [checkedList, setChecked] = useState<Array<unknown>>([]);

  const onChangeChecked = (event: React.ChangeEvent<HTMLInputElement>, item: any) => {
    const { checked } = event.target;

    if (checked) {
      setChecked([...checkedList, item]);

      return;
    }

    setChecked(checkedList.filter((check) => check !== item));
  };

  function Checkbox({
    id, disabled, data, ...props
  } : Props) {
    return (
      <label htmlFor={data.id}>
        <input
          type="checkbox"
          id={data.id}
          name={data.id}
          disabled={disabled}
          checked={checkedList.includes(data)}
          onChange={(event) => onChangeChecked(event, data)}
          {...props}
        />
        <Name>{data.name}</Name>
      </label>
    );
  }

  return {
    checkedList, Checkbox,
  };
}
