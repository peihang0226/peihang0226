import CryptoJS from 'crypto-js';
 
class HashUtils {
 
    // 计算MD5-十六进制
    static md5HexHash(input) {
        // 计算 MD5
        const hash = CryptoJS.MD5(input);
        // 输出十六进制字符串
        return hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算MD5-base64
    static md5Base64Hash(input) {
        // 对字符串进行MD5加密
        const md5Hash = CryptoJS.MD5(input);
        // 将MD5结果转换为Base64格式
        return md5Hash.toString(CryptoJS.enc.Base64);
    }
 
    // 计算sha1-十六进制
    static sha1HexHash(input) {
        const sha1Hash = CryptoJS.SHA1(input);
        // 输出SHA-1加密后的十六进制字符串
        return sha1Hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算sha1-base64
    static sha1Base64Hash(input) {
        const sha1Hash = CryptoJS.SHA1(input);
        // 输出SHA-1加密后的十六进制字符串
        return sha1Hash.toString(CryptoJS.enc.Base64);
    }
 
    // 计算sha256-十六进制
    static sha256HexHash(input) {
        const sha1Hash = CryptoJS.SHA256(input);
        return sha1Hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算sha256-base64
    static sha256Base64Hash(input) {
        const sha1Hash = CryptoJS.SHA256(input);
        return sha1Hash.toString(CryptoJS.enc.Base64);
    }
 
    // 计算sha384-十六进制
    static sha384HexHash(input) {
        const sha1Hash = CryptoJS.SHA384(input);
        return sha1Hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算sha384-base64
    static sha384Base64Hash(input) {
        const sha1Hash = CryptoJS.SHA384(input);
        return sha1Hash.toString(CryptoJS.enc.Base64);
    }
 
    // 计算sha512-十六进制
    static sha512HexHash(input) {
        const sha1Hash = CryptoJS.SHA512(input);
        return sha1Hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算sha512-base64
    static sha512Base64Hash(input) {
        const sha1Hash = CryptoJS.SHA512(input);
        return sha1Hash.toString(CryptoJS.enc.Base64);
    }
 
    // 计算sha3-十六进制
    static sha3HexHash(input) {
        const sha1Hash = CryptoJS.SHA3(input);
        return sha1Hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算sha3-base64
    static sha3Base64Hash(input) {
        const sha1Hash = CryptoJS.SHA3(input);
        return sha1Hash.toString(CryptoJS.enc.Base64);
    }
 
    // 计算sha224-十六进制
    static sha224HexHash(input) {
        const sha1Hash = CryptoJS.SHA224(input);
        return sha1Hash.toString(CryptoJS.enc.Hex);
    }
 
    // 计算sha224-base64
    static sha224Base64Hash(input) {
        const sha1Hash = CryptoJS.SHA224(input);
        return sha1Hash.toString(CryptoJS.enc.Base64);
    }
 
    static hexToBinary(hexString) {
        let binaryString = "";
        for (let i = 0; i < hexString.length; i++) {
            const binaryValue = parseInt(hexString[i], 16)
                .toString(2)
                .padStart(4, '0');
            binaryString += binaryValue;
        }
        return binaryString;
    }
 
}
 
export default HashUtils;