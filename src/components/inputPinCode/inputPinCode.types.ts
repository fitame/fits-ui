export interface InputPinCodeProps {
  size: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onChange?: (...event: any[]) => void;
  name?: string;
  value?: string;
}

export interface InputPinRefProps {
  name?: string;
  value: string;
}
