import React from 'react'
import { FlickrPhoto } from './FlickrPhoto.component'

export default {
    title: 'FlickrPhoto',
    component: FlickrPhoto,
}

export const Default = () => {
    return (
        <FlickrPhoto
            farm="66"
            server="65535"
            id="49243611922"
            secret="a41c9e59f5_b"
        />
    )
}
