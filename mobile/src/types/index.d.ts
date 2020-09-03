declare module 'react-native-phone-call' {
  export type CallArguments = {
    number: string;
    prompt: boolean;
  };

  export default function call(args: CallArguments): Promise<void>;
}
