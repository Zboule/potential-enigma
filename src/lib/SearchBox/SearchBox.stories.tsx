import React from 'react'
import { SearchBox } from './SearchBox.component'
import { action } from '@storybook/addon-actions';

export default {
    title: 'SearchBox',
    component: SearchBox,
}

export const Default = () => {
    return (
        <SearchBox onSearch={action('Search')} />
    )
}
