interface IProps {
  width?: number,
  height?: number
}

export const Compress = ({ width, height }: IProps) => {
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
        d="M160 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v64H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h96c17.7 0 32-14.3 32-32V64zM32 320c-17.7 0-32 14.3-32 32s14.3 32 32 32H96v64c0 17.7 14.3 32 32 32s32-14.3 32-32V352c0-17.7-14.3-32-32-32H32zM352 64c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H352V64zM320 320c-17.7 0-32 14.3-32 32v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H320z"
      />
    </svg>
  )
}