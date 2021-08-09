import { OfficesData } from "./type/OfficesData";
import { Floors } from "./type/Floors";

const officesData: OfficesData = {
  USA: {
    NY: {
      address_1: "office_id-1",
      address_2: "office_id-2",
      address_3: "office_id-3",
      address_4: "office_id-4",
      address_5: "office_id-5",
    },
    Boulder: {
      address_1: "office_id-1",
      address_2: "office_id-2",
    },
  },
  Belarus: {
    Minsk: {
      address_1: "office_id-1",
      address_2: "office_id-2",
      address_3: "office_id-3",
      address_4: "office_id-4",
    },
    Brest: {
      address_1: "office_id-1",
      address_2: "office_id-2",
    },
    Vitebsk: {
      address_1: "office_id-1",
      address_2: "office_id-2",
      address_3: "office_id-3",
    },
  },
  Russia: {
    Chelyabinsk: {
      address_1: "office_id-1",
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
              x: 20,
              y: 50,
              width: 200,
              height: 100,
            },
          },
        },
        {
          label: "workplace-test-2",
          type: "type-test",
          placeStatus: {
            blocked: false,
            occupant: "",
            start: 33,
            end: 44,
            coordinates: {
              x: 300,
              y: 50,
              width: 200,
              height: 100,
            },
          },
        },
        {
          label: "workplace-test-3",
          type: "type-test",
          placeStatus: {
            blocked: false,
            occupant: "",
            start: 33,
            end: 44,
            coordinates: {
              x: 20,
              y: 250,
              width: 200,
              height: 100,
            },
          },
        },
        {
          label: "workplace-test-4",
          type: "type-test",
          placeStatus: {
            blocked: false,
            occupant: "",
            start: 33,
            end: 44,
            coordinates: {
              x: 300,
              y: 250,
              width: 200,
              height: 100,
            },
          },
        },
      ],
    },
    {
      id: "office_id-1",
      number: 2,
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
              y: 120,
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
  "office_id-3": [
    {
      id: "office_id-3",
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
