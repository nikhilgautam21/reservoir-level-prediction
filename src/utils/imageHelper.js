import image1 from '../assets/images/image1.jpg'
import image2 from '../assets/images/image2.jpg'
import image3 from '../assets/images/image3.jpg'

const riverToImageMapper = {
    '1': image1,
    '2': image2,
    '3': image3
}

const predictionMapper = {
    '1':{
        '1': image1,
        '2': image2
    },
    '2':{
        '1': image1,
        '2': image2
    },
    '3':{
        '1': image1,
        '2': image2
    }
}

export const getImageForRiver = (river) =>{
    return riverToImageMapper[river]
}

export const getPredictionImageForRiver = (river, contraint) => {
    return predictionMapper[river][contraint]
}