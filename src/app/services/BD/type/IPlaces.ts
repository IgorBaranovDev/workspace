import IPlaceStatus from './IPlaceStatus';

export default interface IPlaces {
    label: string;
    type: string;
    // ??position: string;// "x0, y0, x1, y1"
    history: Array<{
      date: number | Date; // Date only ?
      status: IPlaceStatus;
    }>;
    placeStatus: IPlaceStatus;
  }