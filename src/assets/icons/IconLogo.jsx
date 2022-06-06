import React from "react"
import styled from "styled-components"
import Icon from "./Icon"

const Svg = styled(Icon)`
  width: 45px;
  height: 45px;
  color: var(--color-primary);
`

export const IconLogo = ({ className }) => {
  return (
    <div className={className}>
      <Svg
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 32 32"
      >
        <circle
          cx="8.633"
          cy="8.091"
          r="6.267"
          stroke="currentColor"
          fill="none"
          strokeWidth="0.4"
          transform="matrix(2 0 0 2 -16 0) translate(5.668 -1.683) scale(1.19683)"
        ></circle>
        <path
          fill="currentColor"
          fillRule="nonzero"
          d="M18.726-5L14.974 6.084h-.855L10.683-3.86 7.231 6.084h-.855L2.607-5h.855l3.373 9.976L10.303-5h.776l3.451 9.992L17.935-5h.791z"
          transform="matrix(2 0 0 2 -16 0) matrix(.68241 0 0 .68241 8.72 8.13)"
        ></path>
      </Svg>
    </div>
  )
}
