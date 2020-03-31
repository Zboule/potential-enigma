import React, { useState } from 'react'
import { PhotoGallery } from './PhotoGallery.component'
import { FlickrPhoto } from '../FlickrPhoto/FlickrPhoto.component'


const photosMock = [
    {
        "id": "49718075383",
        "owner": "61897811@N00",
        "secret": "4b08dc1305",
        "server": "65535",
        "farm": 66,
        "title": "Lichen",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49718926277",
        "owner": "61897811@N00",
        "secret": "f35a99ecdd",
        "server": "65535",
        "farm": 66,
        "title": "Lichen",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49717982238",
        "owner": "61897811@N00",
        "secret": "cab3835539",
        "server": "65535",
        "farm": 66,
        "title": "Psydrax odorata (Alahe'e)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49716768687",
        "owner": "158769162@N05",
        "secret": "bb88bff839",
        "server": "65535",
        "farm": 66,
        "title": "Hi F1! Diy Home Decor, Crockpot Recipes and other search trends",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49714733693",
        "owner": "97839683@N03",
        "secret": "011d2cd7b4",
        "server": "65535",
        "farm": 66,
        "title": "Kealakekua",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49714913471",
        "owner": "61897811@N00",
        "secret": "96a48b41ed",
        "server": "65535",
        "farm": 66,
        "title": "White lichen, black rock",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49715214667",
        "owner": "61897811@N00",
        "secret": "3c09abda87",
        "server": "65535",
        "farm": 66,
        "title": "Phymatosorus grossus (laua'e, maile-scented fern)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49714359173",
        "owner": "61897811@N00",
        "secret": "2e1faa7ecb",
        "server": "65535",
        "farm": 66,
        "title": "Phymatosorus grossus (laua'e, maile-scented fern)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49715066222",
        "owner": "61897811@N00",
        "secret": "e3d7014eed",
        "server": "65535",
        "farm": 66,
        "title": "Osteomeles anthyllidifolia (Ulei, Hawaiian rose)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49715045402",
        "owner": "61897811@N00",
        "secret": "525d59f062",
        "server": "65535",
        "farm": 66,
        "title": "Osteomeles anthyllidifolia (Ulei, Hawaiian rose)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49715000172",
        "owner": "61897811@N00",
        "secret": "00f1e9a272",
        "server": "65535",
        "farm": 66,
        "title": "Nakalele Blowhole, Maui",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49713735758",
        "owner": "61897811@N00",
        "secret": "3ea67b098e",
        "server": "65535",
        "farm": 66,
        "title": "Partrige Pea, Chamaecrista nictitans",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49713076093",
        "owner": "61897811@N00",
        "secret": "26325ae13a",
        "server": "65535",
        "farm": 66,
        "title": "Strymon bazochii, Lantana scrub-hairstreak",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49713035336",
        "owner": "61897811@N00",
        "secret": "c070724dac",
        "server": "65535",
        "farm": 66,
        "title": "Strymon bazochii, Lantana scrub-hairstreak",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49712879371",
        "owner": "185705031@N02",
        "secret": "8da708210b",
        "server": "65535",
        "farm": 66,
        "title": "Coronavirus: Alexa Providing Basic Diagnosis For Users",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49710002798",
        "owner": "61897811@N00",
        "secret": "308af21f0e",
        "server": "0",
        "farm": 0,
        "title": "Nakalele Blowhole, Maui",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49710538276",
        "owner": "61897811@N00",
        "secret": "c13bce79cd",
        "server": "0",
        "farm": 0,
        "title": "Nakalele Blowhole, Maui",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49709925557",
        "owner": "141469787@N07",
        "secret": "c84da10b58",
        "server": "65535",
        "farm": 66,
        "title": "Heaven | MeowHi // BDROP // Olive // Casse Lustre",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49706414486",
        "owner": "61897811@N00",
        "secret": "a77526f230",
        "server": "65535",
        "farm": 66,
        "title": "Nakalele Blowhole, Maui",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49706444256",
        "owner": "187543415@N08",
        "secret": "15961c1dca",
        "server": "65535",
        "farm": 66,
        "title": "...",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49706164127",
        "owner": "9513085@N08",
        "secret": "aed2fd32a2",
        "server": "65535",
        "farm": 66,
        "title": "GO",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49704434783",
        "owner": "187583045@N08",
        "secret": "03bce5ee3a",
        "server": "65535",
        "farm": 66,
        "title": "Quiz: How Much Do You Know About Hi Def Phone Wallpaper? | Hi Def Phone Wallpaper",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49703975331",
        "owner": "46260313@N03",
        "secret": "fdf484aae3",
        "server": "65535",
        "farm": 66,
        "title": "9H-FOX Hi Fly A340-300 Madrid Barajas Airport",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49703891847",
        "owner": "14133767@N08",
        "secret": "29af1690a3",
        "server": "65535",
        "farm": 66,
        "title": "°",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49700500892",
        "owner": "187588083@N07",
        "secret": "404508bede",
        "server": "65535",
        "farm": 66,
        "title": "Ah",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49699015123",
        "owner": "187458752@N03",
        "secret": "ed706ee41e",
        "server": "65535",
        "farm": 66,
        "title": "RedRosSt91 (15)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49699015153",
        "owner": "187458752@N03",
        "secret": "dff40cee1a",
        "server": "65535",
        "farm": 66,
        "title": "RedRosSt91 (24)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49699546636",
        "owner": "187458752@N03",
        "secret": "f094c4c0df",
        "server": "65535",
        "farm": 66,
        "title": "RedRosSt91 (8)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49699015108",
        "owner": "187458752@N03",
        "secret": "823d46ae3d",
        "server": "65535",
        "farm": 66,
        "title": "RedRosSt91 (5)",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49696924318",
        "owner": "33252741@N08",
        "secret": "4d13875a52",
        "server": "65535",
        "farm": 66,
        "title": "Hawaii National Guard",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49696225396",
        "owner": "86772257@N00",
        "secret": "15d231eac1",
        "server": "65535",
        "farm": 66,
        "title": "Getting there, somehow",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49695148598",
        "owner": "99876657@N00",
        "secret": "2c087c1d28",
        "server": "65535",
        "farm": 66,
        "title": "Nap Time",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49695845207",
        "owner": "8238019@N08",
        "secret": "efcf38c66d",
        "server": "65535",
        "farm": 66,
        "title": "Dude.",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49695126001",
        "owner": "33252741@N08",
        "secret": "fee5d057fa",
        "server": "65535",
        "farm": 66,
        "title": "Hawaii National Guard",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49692912512",
        "owner": "61897811@N00",
        "secret": "59cd145f9d",
        "server": "0",
        "farm": 0,
        "title": "Two blows and a massive breach",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49692019058",
        "owner": "61897811@N00",
        "secret": "d373ccf518",
        "server": "65535",
        "farm": 66,
        "title": "Double breach",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49692016668",
        "owner": "61897811@N00",
        "secret": "8afb9765d4",
        "server": "65535",
        "farm": 66,
        "title": "Humpback calf sounding",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49692558076",
        "owner": "61897811@N00",
        "secret": "7ccfb3fa9b",
        "server": "65535",
        "farm": 66,
        "title": "Humpback mother and calf",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49692015728",
        "owner": "61897811@N00",
        "secret": "f66a395075",
        "server": "65535",
        "farm": 66,
        "title": "Humpback",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49692207801",
        "owner": "124733810@N06",
        "secret": "41594fa59c",
        "server": "65535",
        "farm": 66,
        "title": "CS-TQW | Hi Fly | Airbus A330-223 | CN 262 | Built  1999 | MAD/LEMD 26/09/2019 | ex HB-IQF, 9M-MKT, VN-A370 | \"Turn the Tide on Plastic\" special colours | wfu 7 Oct 2019 std at LDE",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49691635961",
        "owner": "169743218@N08",
        "secret": "f3c949bd6c",
        "server": "65535",
        "farm": 66,
        "title": "The Alyssum has recovered and is holding the Corner!",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49691298212",
        "owner": "38900564@N07",
        "secret": "9e8c45474d",
        "server": "65535",
        "farm": 66,
        "title": "Diamond Head Lighthouse, Hawaii",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49687592703",
        "owner": "61897811@N00",
        "secret": "73cd64b21e",
        "server": "65535",
        "farm": 66,
        "title": "Hawaiian chicken",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49687576422",
        "owner": "184632360@N02",
        "secret": "019c8a42bf",
        "server": "65535",
        "farm": 66,
        "title": "Stacks on Trumpism covfefe",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49686705898",
        "owner": "185705031@N02",
        "secret": "9f153a4249",
        "server": "65535",
        "farm": 66,
        "title": "Google I/O 2020 Cancelled: Virtual Conference Revoked",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49687047052",
        "owner": "152150640@N04",
        "secret": "d77042eccb",
        "server": "65535",
        "farm": 66,
        "title": "Thai old business people greeting togather by wai",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49683883688",
        "owner": "186930159@N08",
        "secret": "6057f1ab57",
        "server": "65535",
        "farm": 66,
        "title": "9H-MIP / Airbus A380-841 / @ EDDC / 2019-03-12",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49684271082",
        "owner": "156983474@N05",
        "secret": "da67b43a26",
        "server": "65535",
        "farm": 66,
        "title": "Stay Safe, have faith whatever your religion.",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49683671292",
        "owner": "48969493@N07",
        "secret": "f7529c585b",
        "server": "65535",
        "farm": 66,
        "title": "47/366",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    },
    {
        "id": "49682816788",
        "owner": "48969493@N07",
        "secret": "55a62c441d",
        "server": "65535",
        "farm": 66,
        "title": "46/366",
        "ispublic": 1,
        "isfriend": 0,
        "isfamily": 0
    }
]

export default {
    title: 'PhotoGallery',
    component: PhotoGallery,
}

export const Empty = () => {
    return <div style={{ height: "500px" }}>
        <PhotoGallery>
        </PhotoGallery>
    </div>
}

export const WithScrollLoading = () => {

    const [photos, setPhotos] = useState(photosMock.slice(0, 10))

    const handleScrollEnd = () => {
        if (photos.length < photosMock.length) {
            setPhotos(photosMock.slice(0, photos.length + 10))
        }
    }

    return (
        <div style={{ height: "500px" }}>
            <PhotoGallery onScrollEnd={handleScrollEnd}>
                {
                    photos.length > 0 && photos.map((photo) => {
                        return <FlickrPhoto key={photo.id} {...photo} ></FlickrPhoto>
                    })
                }
            </PhotoGallery>
        </div>

    )
}
