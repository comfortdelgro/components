import { InputProps as BuiInputProps } from "baseui/input";
import * as React from 'react';

export interface InputProps extends BuiInputProps {
  StartEnhancer?: React.ReactNode
  EndEnhancer?: React.ReactNode
}
export declare const Input: React.FC<InputProps>;