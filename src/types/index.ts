export interface Violation {
  id: string;
  timestamp: Date;
  location: string;
  zoneType: 'road' | 'railway' | 'restricted';
  status: 'pending' | 'paid' | 'disputed';
  fineAmount: number;
  imageUrl?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
  violations: Violation[];
}

export interface Zone {
  id: string;
  name: string;
  type: 'road' | 'railway' | 'restricted';
  coordinates: [number, number][];
}