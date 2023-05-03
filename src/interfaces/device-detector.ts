export interface DeviceDetector {
  os: OS;
  client: Client;
  device: Device;
}

export interface Client {
  type: string;
  name: string;
  short_name: string;
  version: string;
  engine: string;
  engine_version: string;
  family: string;
}

export interface Device {
  id: string;
  type: string;
  brand: string;
  model: string;
  code: string;
}

export interface OS {
  name: string;
  short_name: string;
  version: string;
  platform: string;
  family: string;
}
