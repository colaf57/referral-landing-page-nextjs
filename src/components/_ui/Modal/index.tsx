import React, { Fragment, ReactNode, useRef } from "react";
import classNames from "classnames";
import { Transition } from "@headlessui/react";

import Container from "../Container";
import Icon from "../Icon";
import useOutsideClick from "../../../hooks/useOutsideClick";

import styles from "./styles.module.scss";

type ModalProps = {
  children: ReactNode;
  show: boolean;
  onClose?: Function;
  disabled?: boolean;
  className?: string;
  hideClose?: boolean;
};

const Modal: React.FC<ModalProps> = ({
  children,
  show = false,
  onClose = () => {},
  disabled = false,
  className = "",
  hideClose = false,
}) => {
  const ref = useRef<HTMLInputElement | null>(null);

  useOutsideClick(ref, () => {
    if (!disabled) onClose();
  });

  return (
    <>
      <Transition appear show={show} as={Fragment}>
        <div className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={styles.layer} />
          </Transition.Child>
          <div className={classNames(styles.modalWrapper)}>
            <Transition.Child
              as={Fragment}
              enter={"ease-out duration-300"}
              enterFrom={classNames("tablet:opacity-0 tablet:scale-95")}
              enterTo={"opacity-100 scale-100 translate-0"}
              leave={"ease-in duration-200"}
              leaveFrom={"opacity-100 scale-100 translate-0"}
              leaveTo={classNames("tablet:opacity-0 tablet:scale-95 ")}
            >
              <div className={classNames(styles.modal)} ref={ref} style={{ overflow: "auto" }}>
                <Container className={classNames(styles.modalContent, className)}>
                  {!hideClose ? (
                    <button
                      className={styles.closeIcon}
                      onClick={() => {
                        if (!disabled) onClose();
                      }}
                    >
                      <Icon name="Close" />
                    </button>
                  ) : (
                    false
                  )}
                  {children}
                </Container>
              </div>
            </Transition.Child>
          </div>
        </div>
      </Transition>
    </>
  );
};

export default Modal;
