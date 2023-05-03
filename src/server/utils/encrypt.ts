import { createCipheriv, randomBytes, scrypt } from 'crypto';
import { promisify } from 'util';

const iv = randomBytes(16);
const password = 'Password used to generate key';

export default async function encrypt(strToEncrypt: string): Promise<string> {
  const key = (await promisify(scrypt)(password, 'salt', 32)) as Buffer;
  const cipher = createCipheriv('aes-256-ctr', key, iv);

  const encryptedText = Buffer.concat([
    cipher.update(strToEncrypt),
    cipher.final(),
  ]);
  console.log(encryptedText.toString('hex'));
  return encryptedText.toString('hex');
}
