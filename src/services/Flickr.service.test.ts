import { FLICKR_SERVICE } from "./Flickr.service";


test('use photos.search', async () => {
    let result = await FLICKR_SERVICE.getPhotos("hi")

    expect(result.page).toBe(1);
    expect(result.photo.length).toBe(50)
});
