interface IProps {
  width?: number,
  height?: number
}

export const Expand = ({ width, height }: IProps) => {
  const __width__ = width 
    ? width
    : height 
      ? height * 448 / 512
      : 44.8;

  const __height__ = width
    ? width * 512 / 448
    : height
      ? height
      : 51.2

  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      width={__width__}
      height={__height__}
    >
      <path 
        d="M32 32C14.3 32 0 46.3 0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H32zM64 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H64V352zM320 32c-17.7 0-32 14.3-32 32s14.3 32 32 32h64v64c0 17.7 14.3 32 32 32s32-14.3 32-32V64c0-17.7-14.3-32-32-32H320zM448 352c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H320c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V352z"
      />
    </svg>
  )
}