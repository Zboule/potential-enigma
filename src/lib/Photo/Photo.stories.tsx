import React from 'react'
import { Photo } from './Photo.component'

export default {
    title: 'Photo',
    component: Photo,
}

export const Default = () => {
    return (
        <Photo
            url={'https://farm66.staticflickr.com/65535/49243611922_a41c9e59f5_b.jpg'}
        />
    )
}
