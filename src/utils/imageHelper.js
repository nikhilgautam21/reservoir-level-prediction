import HARANGI_LI from "../assets/images/HARANGI_LI.png";
import HARANGI_SP from "../assets/images/HARANGI_SP.png";
import HEMAVATHI_LI from "../assets/images/HEMAVATHI_LI.png";
import HEMAVATHI_SP from "../assets/images/HARANGI_SP.png";
import KABINI_SP from "../assets/images/KABINI_SP.png";
import KABINI_LI from "../assets/images/KABINI_LI.png";
import KRS_SP from "../assets/images/KRS_SP.png";
import KRS_LI from "../assets/images/KRS_LI.png";
import predicationKRS  from "../assets/images/Prediction_KRS.png"


const predictionMapper = {
  "KRS": predicationKRS,
};

const ImageMapper = {
  "HARANGI": {
    "SP": HARANGI_SP,
    "LP": HARANGI_LI,
  },
  "HEMAVATHI": {
    "SP": HEMAVATHI_SP,
    "LP": HEMAVATHI_LI,
  },
  "KABINI": {
    "SP": KABINI_SP,
    "LP": KABINI_LI,
  },
  "KRS": {
    "SP": KRS_SP,
    "LP": KRS_LI,
  },
};

export const getReserviorData = () => {
  let data = [
    { key: "HARANGI", text: "HARANGI", value: "HARANGI" },
    { key: "HEMAVATHI", text: "HEMAVATHI", value: "HEMAVATHI" },
    { key: "KABINI", text: "KABINI", value: "KABINI" },
    { key: "KRS", text: "KRS", value: "KRS" },
  ];
  return data;
};

export const getFiltersData = () => {
  let data = [
    { key: "Scatter Plot", text: "Scatter Plot", value: "SP" },
    { key: "Line Plot", text: "Line Plot", value: "LP" },
  ];
  return data
};

export const getPredicationImageForRiver = (river) => {
  return predictionMapper[river]
};


export const getImageForRiver = (river, contraint) => {
  return ImageMapper[river][contraint];
};
