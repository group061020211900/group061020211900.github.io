import React from 'react';
import { OverlayTriggerProps } from '../Overlay/OverlayTrigger';
export declare type WhisperProps = OverlayTriggerProps;
export interface WhisperInstance extends React.Component<WhisperProps> {
    open: (delay?: number) => void;
    close: (delay?: number) => void;
}
declare const Whisper: React.ForwardRefExoticComponent<OverlayTriggerProps & React.RefAttributes<unknown>>;
export default Whisper;
