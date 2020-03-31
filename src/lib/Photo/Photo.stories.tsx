import React from 'react'
import { Photo } from './Photo.component'
import { action } from '@storybook/addon-actions'

export default {
    title: 'Photo',
    component: Photo,
}

export const Default = () => {
    return (
        <Photo
            url={'https://farm66.staticflickr.com/65535/49243611922_a41c9e59f5_b.jpg'}
            alt="abc"
            title="Title"
        />
    )
}


export const WhitClickHandler = () => {
    return (
        <Photo
            url={'https://farm66.staticflickr.com/65535/49243611922_a41c9e59f5_b.jpg'}
            onClick={action('click')}
            alt="abc"
            title="Title"
        />
    )
}
