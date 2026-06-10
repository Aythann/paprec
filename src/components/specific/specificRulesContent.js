import { obligationsImages } from "../../data/safety/obligations";
import { arrimageImages } from "../../data/safety/arrimage";

const ppeIcons = obligationsImages;

export const specificRulesContent = {
  tautliner: {
    sections: [
      {
        key: "mandatorySecuring",
        items: [
          {
            key: "ppe",
            icons: ppeIcons,
          },
          {
            key: "equipmentAdapted",
            icons: arrimageImages.tautliner.rules.equipmentAdapted,
          },
          {
            key: "strapPerRow",
            image: arrimageImages.tautliner.rules.strapPerRow,
          },
          {
            key: "checkAfterDistance",
            image: arrimageImages.tautliner.rules.checkAfterDistance,
          },
        ],
      },
      {
        key: "duringLoading",
        items: [
          {
            key: "conePosition",
            image: arrimageImages.tautliner.rules.conePosition,
          },
          {
            key: "noClimbing",
            image: arrimageImages.tautliner.rules.noClimbing,
          },
          {
            key: "noWalkingArea",
            image: arrimageImages.tautliner.rules.noWalkingArea,
          },
          {
            key: "loadingAllowed",
            image: arrimageImages.tautliner.rules.loadingAllowed,
          },
        ],
      },
    ],
  },

  tailgateBoxTruck: {
    sections: [
      {
        key: "mandatorySecuring",
        items: [
          {
            key: "ppe",
            icons: ppeIcons,
          },
          {
            key: "adaptedStrapBarHooks",
          },
          {
            key: "keepSystemTensioned",
          },
          {
            key: "secureLastRow",
          },
        ],
      },
      {
        key: "beforeDeparture",
        items: [
          {
            key: "checkLoadStability",
          },
          {
            key: "checkAfterDistance",
          },
        ],
      },
    ],
  },

  ampliroll: {
    sections: [
      {
        key: "mandatoryChecks",
        items: [
          {
            key: "ppe",
            icons: ppeIcons,
          },
          {
            key: "checkSafetyLatch",
          },
          {
            key: "hookOnly",
          },
          {
            key: "checkHooksLocked",
          },
        ],
      },
      {
        key: "liftingAndSecuring",
        items: [
          {
            key: "straightInRollers",
          },
          {
            key: "stopIfLateralOffset",
          },
          {
            key: "useNetOrTarpaulin",
          },
          {
            key: "unfoldUnderrunBar",
          },
        ],
      },
    ],
  },

  multiChains: {
    sections: [
      {
        key: "beforeUncoupling",
        items: [
          {
            key: "ppe",
            icons: ppeIcons,
          },
          {
            key: "wheelChocks",
          },
          {
            key: "checkTrailerStops",
          },
          {
            key: "straightInGuideRails",
          },
        ],
      },
      {
        key: "chainsAndLocking",
        items: [
          {
            key: "checkHandsInHooks",
          },
          {
            key: "secureEachSide",
          },
          {
            key: "chainsTensioned",
          },
          {
            key: "checkAfterDistance",
          },
        ],
      },
    ],
  },
};