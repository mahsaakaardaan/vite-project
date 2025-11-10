import { Dispatch, SetStateAction, useRef } from 'react';
import Icon from './Icon';
import useOutSideClick from '../hooks/useOutSideClick';
import { createPortal } from 'react-dom';

type Props = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: any;
  style?: string;
  headerTitle?: string;
};

function BottomSheet({
  children,
  open,
  setOpen,
  style,
  headerTitle
}: Props) {
  const bsRef = useRef(null);
  useOutSideClick(bsRef, () => setOpen(false));

  if (!open) return null;
  return (
    <>
      {createPortal(
        <div
          className={`w-[100vw] fixed md:flex md:items-center md:justify-center 
          md:h-[100vh] bottom-0 z-50 bg-[#a6acaf99] 
          ${'max-md:animate-[height_400ms_ease-in-out]'}`}
          style={{
            animationFillMode: 'forwards'
          }}>
          <div
            ref={bsRef}
            // h-[50%] to h-fit
            className={`absolute md:w-[50%] max-md:w-[100%] h-fit p-4
             bg-white max-md:bottom-0 max-md:rounded-t-2xl
              max-md:z-50 md:rounded-2xl ${style}`}>
            <div className="flex items-center justify-between">
              {headerTitle && <p>{headerTitle}</p>}
              <Icon name="close" onClick={() => setOpen(false)} />
            </div>
            <Separator style="my-4" />
            {children}
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default BottomSheet;

const Separator = ({ style }: { style: any }) => (
  <div className={`w-full h-[1px] bg-icon ${style}`} />
);
