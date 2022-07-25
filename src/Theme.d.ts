import * as React from 'react';
import { defaultThemeT } from "./utils/themes";
import {Client, Server} from 'styletron-engine-atomic'

export declare const Theme: React.FC<{
  theme: defaultThemeT
  children: React.ReactNode
  engine: Client | Server
}>

export default Theme;