import { OfficesData } from "./type/OfficesData";
import { Floors } from "./type/Floors";

const officesData: OfficesData = {
  USA: {
    NY: {
      address_1: "office_id-1",
      address_2: "office_id-1",
      address_3: "office_id-1",
      address_4: "office_id-1",
      address_5: "office_id-1",
    },
    Boulder: {
      address_1: "office_id-2",
      address_2: "office_id-3",
    },
  },
  Belarus: {
    Minsk: {
      address_1: "office_id-4",
      address_2: "office_id-1",
      address_3: "office_id-1",
      address_4: "office_id-1",
    },
    Brest: {
      address_1: "office_id-5",
      address_2: "office_id-6",
    },
    Vitebsk: {
      address_1: "office_id-5",
      address_2: "office_id-6",
      address_3: "office_id-1",
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
            occupant: "",
            start: 33,
            end: 44,
            coordinates: {
              x: 10,
              y: 20,
              width: 100,
              height: 200,
            }
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
            occupant: "",
            start: 33,
            end: 44,
            coordinates: {
              x: 120,
              y: 20,
              width: 100,
              height: 200,
            }
          },
        },
      ],
    },
  ],
};

export { officesData, floors };
