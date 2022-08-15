import { useState } from 'react';
import { Button } from 'arvara';
import { AIclosesquarebol, AIclosecirclebol } from 'arvara-icons';

interface Props {
  show: boolean;
  title?: string;
  subTitle?: string;
  icon?: JSX.Element;
  children?: JSX.Element;
  closeModal: (n: boolean) => void;
}

const Modal = (props: Props) => {
  const { icon, show, title, children, subTitle, closeModal } = props;
  return (
    <>
      {show && (
        <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative my-6 mx-auto">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <AIclosecirclebol
              className="icon solid text-grey-slate cursor-pointer float-right m-4 absolute top-0 right-0"
              onClick={() => closeModal(false)}
            />
            <div className="flex items-center justify-center m-auto mt-5 border-2 border-meador bg-meador bg-opacity-40 w-20 h-20 rounded-full">
            {icon}
          </div>
          <div className="flex items-center justify-center">
          <h5 className="text-3xl text-700 mt-8 items-center justify-center">
            {title}
          </h5>
        </div>
        <p className="text-center container mt-2 text-grey-slate text-base px-3">
          {subTitle}
        </p>
        {children}
            {/* <div className="mx-auto p-6">
              <Button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => closeModal(false)}>
                Close
              </Button>
            </div> */}
          </div>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
      </>
      )}
    </>
  );
};

export default Modal;
