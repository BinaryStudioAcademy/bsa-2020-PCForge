import callByPhone from 'react-native-phone-call';

export default async function call(phoneNumber: string): Promise<void> {
  try {
    if (phoneNumber && phoneNumber.startsWith('+')) {
      callByPhone({number: phoneNumber, prompt: true});
    }
  } catch (error) {}
}
