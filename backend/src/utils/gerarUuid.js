import { v4 as uuidv4 } from 'uuid';

export async function gerarUuidV4() {
  return uuidv4(); // não precisa de await, pois não é assíncrono
}
