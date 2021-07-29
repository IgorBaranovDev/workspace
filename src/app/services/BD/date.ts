import { OfficesData } from "./type/OfficesData";
import { Floors } from "./type/Floors";

const officesData: OfficesData = {
  contry1: {
    city_1: {
      address_1: "office_id-1",
    },
    city_2: {
      address_1: "office_id-2",
      address_2: "office_id-3",
    },
  },
  contry2: {
    city_1: {
      address_1: "office_id-4",
    },
    city_2: {
      address_1: "office_id-5",
      address_2: "office_id-6",
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
