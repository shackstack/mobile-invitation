export interface WeddingData {
  weddingInfo: {
    date: string;
    time: string;
    venue: string;
    address: string;
    transportation: string[];
    parking: string | null;
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  coupleInfo: {
    groomName: string;
    groomFather: string;
    groomMother: string;
    brideName: string;
    brideFather: string;
    brideMother: string;
  };
  contact: {
    groom: string;
    bride: string;
    groomFather: string;
    brideFather: string;
  };
  bankInfo: {
    owner: string;
    bank: string;
    account: string;
  }[];
  images: {
    main: string;
    gallery: string[];
  };
}
