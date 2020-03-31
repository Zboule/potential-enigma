import React from 'react';
import { addDecorator } from '@storybook/react';

addDecorator(
    storyFn =>
        <div className="jjj" style={{ height: 'calc(100vh - 16px)', width:'calc(100vw - 16px)' }}>
            {storyFn()}
        </div>
);
