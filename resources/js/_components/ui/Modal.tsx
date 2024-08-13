import { IconX } from "@tabler/icons-react";
import Button from "./Button";
import { useEffect } from "react";

export interface ModalProps {
  visible: boolean;
  onClose?: () => void;
  children: any;
}

export default function Modal({ visible, onClose, children }: ModalProps): JSX.Element | null {

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { onClose && onClose();}
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return visible ? (
    <div className="ay-modal-bg fixed bg-opacity-60 bg-slate-700 top-0 right-0 bottom-0 left-0 flex justify-center items-center">
      <div className="ay-modal-container bg-white min-w-80 p-3 rounded-xl">
        <div className="flex justify-end items-center pb-1">
          <IconX className="w-5 -mt-2 -mr-1 hover:opacity-80 cursor-pointer" onClick={onClose}/>
        </div>
        {children}
        <div className="flex justify-end items-center pt-2">
          <Button onClick={onClose} className="mr-2">Cancelar</Button>
          <Button onClick={onClose} primary>Aceptar</Button>
        </div>
      </div>
    </div>
  ) : null
}