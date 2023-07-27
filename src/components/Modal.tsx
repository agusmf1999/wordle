import { Fragment, PropsWithChildren } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Button } from "./Button";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  closeButtonText?: string;
  className?: string;
}

export const Modal = ({
  title = "",
  isOpen,
  onClose,
  closeButtonText = "Cerrar",
  className = "",
  ...props
}: PropsWithChildren<ModalProps>) => {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-2/5 transform overflow-hidden rounded-2xl bg-light-grey border p-6 text-left align-middle shadow-xl transition-all flex items-center flex-col">
                <Dialog.Title
                  as="h3"
                  className="font-semibold text-4xl text-center p-5"
                >
                  {title}
                </Dialog.Title>

                {props.children}
                <Button className="text-3xl w-1/2" onClick={onClose}>
                  {closeButtonText}
                </Button>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
