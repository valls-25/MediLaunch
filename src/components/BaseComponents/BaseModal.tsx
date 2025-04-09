"use client";
import React, { Ref } from "react";
import { styled } from "styled-components";

export type StyledComponentProps = {
  $background?: Record<"r" | "g" | "b" | "a", number>;
  $color?: Record<"r" | "g" | "b" | "a", number>;
  $buttonStyle?: string;
  $margin?: any[];
  $padding?: any[];
  $display?: string;
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
  $position?: string;
  $borderRadius?: string;
  $borderWidth?: string;
  $borderStyle?: string;
  $borderColor?: string;
  $fontSize?: string;
  $fontWeight?: string;
  $lineHeight?: string;
  $spacing?: string;
  $align?: string;
  $verticalAlign?: string;
  $transform?: string;
  $decoration?: string;
  $opacity?: number;
  $cursor?: string;
  $gap?: string;
  $flexDirection?: string;
};

export const StyledComponent = styled.div<StyledComponentProps>`
  background: ${({ $background }) =>
    $background ? `rgba(${Object.values($background)})` : "transparent"};
  border: 2px solid transparent;
  border-color: ${({ $buttonStyle, $background }) =>
    $buttonStyle === "outline" && $background
      ? `rgba(${Object.values($background)})`
      : "transparent"};
  margin: ${({ $margin }) =>
    $margin
      ? `${$margin[0]}px ${$margin[1]}px ${$margin[2]}px ${$margin[3]}px`
      : "0"};
  padding: ${({ $padding }) =>
    $padding
      ? `${$padding[0]}px ${$padding[1]}px ${$padding[2]}px ${$padding[3]}px`
      : "0"};
  color: ${({ $color }) =>
    $color ? `rgba(${Object.values($color)})` : "black"};
  gap: ${({ $gap }) => $gap};
  display: ${({ $display }) => $display};
  width: ${({ $width }) => $width};
  min-width: ${({ $minWidth }) => $minWidth};
  max-width: ${({ $maxWidth }) => $maxWidth};
  height: ${({ $height }) => $height};
  min-height: ${({ $minHeight }) => $minHeight};
  max-height: ${({ $maxHeight }) => $maxHeight};
  position: ${({ $position }) => $position};
  border-radius: ${({ $borderRadius }) => $borderRadius};
  border-width: ${({ $borderWidth }) => $borderWidth};
  border-style: ${({ $borderStyle }) => $borderStyle};
  border-color: ${({ $borderColor }) => $borderColor};
  font-size: ${({ $fontSize }) => $fontSize};
  font-weight: ${({ $fontWeight }) => $fontWeight};
  line-height: ${({ $lineHeight }) => $lineHeight};
  margin: ${({ $spacing }) => $spacing};
  text-align: ${({ $align }) => $align};
  vertical-align: ${({ $verticalAlign }) => $verticalAlign};
  transform: ${({ $transform }) => $transform};
  text-decoration: ${({ $decoration }) => $decoration};
  opacity: ${({ $opacity }) => $opacity};
  cursor: ${({ $cursor }) => $cursor};
  flex-direction: ${({ $flexDirection }) => $flexDirection};
`;

export type BaseComponentProps = StyledComponentProps & {
  children?: React.ReactNode;
  className?: string;
  onClick?: (e?: any) => void;
  as?: React.ElementType;
  ref?: Ref<HTMLElement>;
  [key: string]: any;
};

export const BaseComponent = ({
  children,
  className,
  onClick,
  ref,
  as: Component = "div",
  ...props
}: BaseComponentProps) => {
  console.log(props.$color);
  return (
    <StyledComponent
      as={Component}
      className={className}
      onClick={onClick}
      ref={ref}
      {...props}
    >
      {children}
    </StyledComponent>
  );
};
