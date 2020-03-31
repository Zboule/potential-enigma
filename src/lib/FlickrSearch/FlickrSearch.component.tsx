import * as React from 'react'
import './FlickrSearch.component.scss'
import { SearchBox } from '../SearchBox/SearchBox.component'
import { PhotoGallery } from '../PhotoGallery/PhotoGallery.component'
import { FlickrPhoto } from '../FlickrPhoto/FlickrPhoto.component'
import { MyLoader } from '../Loader/Loader.component'


export interface FlickrPhotoInfo {
    id: string,
    owner: string,
    secret: string,
    server: string,
    farm: number,
    title: string,
    ispublic: string,
    isfriend: string,
    isfamily: string,
    dateupload: string,
    ownername: string
}

export interface FlickrSearchResponse {
    page: number,
    pages: number,
    perpage: number,
    total: string,
    photo: FlickrPhotoInfo[]
}

interface IState {
    photos: FlickrPhotoInfo[]
    isLoading: boolean
}

interface IProps {
    onClickPhoto: (photoInfo: FlickrPhotoInfo) => void
    defaultSearch?: string
}

export class FlickrSearch extends React.Component<IProps, IState> {

    lastLoadedPage = 0
    searchValue = ""

    state: IState = {
        photos: [],
        isLoading: false
    }


    public componentDidMount() {
        if (this.props.defaultSearch && this.props.defaultSearch !== "") {
            this.handleSearchChange(this.props.defaultSearch)
        }
    }


    public render(): JSX.Element {

        return (
            <div className="flickr-search">
                <div className="search-container">
                    <SearchBox onSearch={this.handleSearchChange} />
                </div>

                <div className="gallery-container">
                    {this.state.isLoading ? <MyLoader /> : null}
                    <PhotoGallery onScrollEnd={this.handleScrollEnd}>
                        {
                            this.state.photos.length > 0 && this.state.photos.map((photo) => {
                                return <FlickrPhoto key={photo.id} {...photo} onClick={this.handleClickPhoto(photo)}></FlickrPhoto>
                            })

                        }
                    </PhotoGallery>
                </div>



            </div>
        )
    }

    private handleClickPhoto = (photoInfo: FlickrPhotoInfo) => {
        return () => {
            this.props.onClickPhoto(photoInfo)
        }
    }


    private handleSearchChange = async (searchValue: string) => {
        if (this.searchValue === searchValue) {
            return
        }
        this.searchValue = searchValue
        this.lastLoadedPage = 0

        if (this.searchValue === "") {
            this.setState({ photos: [] })
        }
        else {
            console.log(this.searchValue === "", this.searchValue)
            this.setState({ isLoading: true })
            this.getNextPage()
        }
    }


    private handleScrollEnd = async () => {
        if (this.searchValue !== "") {
            this.getNextPage()
        }
    }

    private async getNextPage(): Promise<void> {
        let searchResult = await this.getPhotos(this.searchValue, this.lastLoadedPage + 1)

        let newPhotos = searchResult.photo
        if (this.lastLoadedPage > 1) {
            newPhotos = [...this.state.photos, ...newPhotos]
        }

        this.lastLoadedPage = searchResult.page

        this.setState({
            photos: newPhotos,
            isLoading: false
        })
    }

    private async getPhotos(search: string, page: number = 0): Promise<FlickrSearchResponse> {

        const params = [
            "method=flickr.photos.search",
            "api_key=ef1f9d4f8ca80dada31c684364355282",
            "FLickrApi_sig=d7f57fa9e01a6a2d6ccd8597b8d2f86b",
            "nojsoncallback=1",
            "format=json",
            "tags=" + search,
            "page=" + page,
            "per_page=15",
            "content_type=7"
        ]

        const response = await fetch("https://api.flickr.com/services/rest?" + params.join("&"))
        const asJson = await response.json()

        return asJson.photos
    }
}
