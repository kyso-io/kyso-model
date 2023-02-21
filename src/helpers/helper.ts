import * as crypto from 'crypto';

export class Helper {
  public static generateRandomPassword() {
    const wishlist = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length = 30;

    const randomPassword = Array.from(crypto.randomFillSync(new Uint32Array(length)))
      .map((x) => wishlist[x % wishlist.length])
      .join('');

    return randomPassword;
  }
}
