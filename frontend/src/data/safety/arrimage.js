import equerreArrimage from "../../assets/pictos/equerre-arrimage.png";
import coinArrimage from "../../assets/pictos/coin-arrimage.png";
import percheArrimage from "../../assets/pictos/perche-arrimage.png";
import camionArrimage from "../../assets/pictos/camion-arrimage.png";
import sangleArrimage from "../../assets/pictos/sangle-arrimage.png";
import checkArrimage from "../../assets/pictos/check-arrimage.png";
import coneArrimage from "../../assets/pictos/cone-arrimage.png";
import climbingArrimage from "../../assets/pictos/climbing-arrimage.png";
import walkAreaArrimage from "../../assets/pictos/walk-area-arrimage.png";
import startArrimage from "../../assets/pictos/start-arrimage.png";

export const arrimageImages = {
  tautliner: {
    equipment: [
      sangleArrimage,
      coinArrimage,
      equerreArrimage,
      percheArrimage,
    ],
    rules: {
      ppe: null,
      equipmentAdapted: [
        sangleArrimage,
        coinArrimage,
        equerreArrimage,
        percheArrimage,
      ],
      strapPerRow: camionArrimage,
      checkAfterDistance: checkArrimage,
      conePosition: coneArrimage,
      noClimbing: climbingArrimage,
      noWalkingArea: walkAreaArrimage,
      loadingAllowed: startArrimage,
    },
  },
};