/// <reference types="react" />
import * as React from 'react';
import { Message } from 'botframework-directlinejs-modified';
import { IDoCardAction } from './Chat';
export interface MessagePaneProps {
    activityWithSuggestedActions: Message;
    takeSuggestedAction: (message: Message) => any;
    children: React.ReactNode;
    setFocus: () => void;
    doCardAction: IDoCardAction;
}
export declare const MessagePane: React.ComponentClass<any>;
