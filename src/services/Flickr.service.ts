var xml2js = require('xml2js');

export interface FlickrSearchResponse {
    page: number,
    pages: number,
    perpage: number,
    total: string,
    photo: {
        id: string,
        owner: string,
        secret: string,
        server: string,
        farm: string,
        title: string,
        ispublic: string,
        isfriend: string,
        isfamily: string,
        dateupload: string,
        ownername: string
    }[]
}

class FlickrService {

    private flickrURL = "https://api.flickr.com/services/rest?"

    public async getPhotos(search: string, page: number = 0): Promise<FlickrSearchResponse> {

        const params = [
            "method=flickr.photos.search",
            "api_key=ef1f9d4f8ca80dada31c684364355282",
            "FLickrApi_sig=d7f57fa9e01a6a2d6ccd8597b8d2f86b",
            "nojsoncallback=1",
            "format=json",
            "tags=" + search,
            "page=0",
            "per_page=50",
            "content_type=7"
        ]

        const response = await fetch(this.flickrURL + params.join("&"))
        const asJson = await response.json()

        return asJson.photos
    }
}


export const FLICKR_SERVICE = new FlickrService()