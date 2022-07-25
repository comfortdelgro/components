import * as React from "react";
import { StyletronComponent } from "styletron-react";
import { ModalProps as BuiModalProps } from "baseui/modal";

export const ModalHeader: StyletronComponent<any, any>;
export const ModalBody: StyletronComponent<any, any>;
export const ModalFooter: StyletronComponent<any, any>;
export class ModalButton extends React.Component<{
  kind?: string
  size?: string
  iconPosition?: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => any
  children?: any
}> {}

export declare const Modal: React.FC<BuiModalProps>;