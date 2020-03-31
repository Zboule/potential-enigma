import React from 'react'
import { FlickrSearch } from "./FlickrSearch.component"
import { action } from '@storybook/addon-actions'

export default {
    title: 'FlickrSearch',
    component: FlickrSearch,
}

export const Default = () => {
    return (
        <FlickrSearch onClickPhoto={action('clickPicture')}/>
    )
}

export const WithDefaultSearch = () => {
    return (
        <FlickrSearch onClickPhoto={action('clickPicture')} defaultSearch="abc"/>
    )
}
