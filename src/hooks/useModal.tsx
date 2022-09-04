import { useState } from 'react';

interface ReturnType {
  isOpen: boolean;
  toggle: () => void;
}

export default function useModal(): ReturnType {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return {
    isOpen,
    toggle,
  };
}
