import { OfficesData } from "./type/OfficesData";
import { Floors } from "./type/Floors";

const officesData: OfficesData = {
  USA: {
    NY: {
      address_1: "office_id-1",
    },
    Boulder: {
      address_1: "office_id-2",
      address_2: "office_id-3",
    },
  },
  Belarus: {
    Minsk: {
      address_1: "office_id-4",
    },
    Brest: {
      address_1: "office_id-5",
      address_2: "office_id-6",
    },
    Vitebsk: {
      address_1: "office_id-5",
      address_2: "office_id-6",
    },
  },
  Russia: {
    Chelyabinsk: {
      address_1: "office_id-4",
    },
  },
};

const floors: Floors = {
  "office_id-1": [
    {
      id: "office_id-1",
      number: 1,
      places: [
        {
          label: "workplace-test-1",
          type: "type-test",
          placeStatus: {
            blocked: false,
            occupants: "",
            start: 33,
            end: 44,
          },
        },
      ],
    },
  ],
  "office_id-2": [
    {
      id: "office_id-2",
      number: 1,
      places: [
        {
          label: "workplace-test-1",
          type: "type-test",
          placeStatus: {
            blocked: false,
            occupants: "",
            start: 33,
            end: 44,
          },
        },
      ],
    },
  ],
};

export { officesData, floors };
