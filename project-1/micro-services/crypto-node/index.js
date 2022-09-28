const crypto = require("crypto");

//normal hash same values if same password
/*function hash(password) {
  return crypto.createHash("sha256").update(password).digest("hex");
}

let password = "hi-mom";
const hash1 = hash(password);
password = "hi-mom";
const hash2 = hash(password);
const match = hash1 === hash2;
console.log("password" + match ? "matched" : "not matched");
console.log(hash1 + "-" + hash2);*/

//using salt for unique hashing

/*function signUp(email, password) {
  const salt = crypto.randomBytes(20).toString("hex"); //creates hex values string
  const hashedPassword = crypto.scryptSync(password, salt, 64).toString("hex"); //combaines salt and password to create buffer then to string 64 bit
  const user = { email, password: `${salt}:${hashedPassword}` }; //asigning key to salt
  users.push(user);
  return user;
}

function signIn(email, password) {
  const user = users.find((u) => u.email == email);
  const [salt, hashedPassword] = user.password.split(":"); //splits the salt and key
  const hashedBuffer = crypto.scryptSync(password, salt, 64); //cobaines extracted salt and parameter password to form the key buffer
  const keyBuffer = Buffer.from(hashedPassword, "hex"); //converts hex to buffer of original key
  const match = crypto.timingSafeEqual(hashedBuffer, keyBuffer); //compares both original buffer and new buffer

  if (match) {
    return "login-success";
  } else {
    return "login-failed";
  }
}

const users = [];
const email = "cmkali.com";
const password = "kali";
const user = signUp(email, password);
console.log(signIn(email, password));*/

//hashing with password is done by hmac
/*const msg="hi-mom"
const password="super-secret"
const encryptedMsg=crypto.createHmac('sha256',password).update(msg).digest('hex');
console.log(encryptedMsg)*/

//encrypting and ecrypting using same key

/*const msg="hello world";
const key =crypto.randomBytes(32);
const iv=crypto.randomBytes(16); //initialization vector for generating diff ouputs for same input (unique)
const cipher=crypto.createCipheriv('aes256',key,iv); //creating cipher with key,iv and algo

//encrypt
const encryptedMsg=cipher.update(msg,'utf8','hex')+cipher.final('hex');//encrypting the  msg using the above generated cipher(formula)
console.log("encrypted message "+encryptedMsg);

//decrypt
const deCipher=crypto.createDecipheriv('aes256',key,iv);//creating same formula or key for decrypting
const decryptedMsg=deCipher.update(encryptedMsg,'hex','utf8')+deCipher.final('utf8');//using the above created decrypt formula to decrypt from hex to utf8
console.log("decrypted msg "+decryptedMsg)
*/

//generate key value pair of public and privae key by rsa

/*const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
  publicKeyEncoding: { type: "spki", format: "pem" }, //public key with spki tyepa and pem
  privateKeyEncoding: {      //private key with spki tyepa and pem
    type: "pkcs8",                          
    format: "pem",
    //cipher: "aes-256-cbc",
    //passphrase: "top-secret",
  },
});

const msg="hello world"
const encryptedMsg=crypto.publicEncrypt(publicKey,Buffer.from(msg)) //encrypt using public key
console.log("encrypted "+encryptedMsg.toString('hex'));

const decryptedMsg=crypto.privateDecrypt(privateKey,encryptedMsg); //decrypt using private key
console.log("decrypted msg "+decryptedMsg.toString('utf8'))*/

//RSA signing signature way sign with privatekey and verify with public key
const { publicKey, privateKey } = crypto.generateKeyPairSync("rsa", {
  modulusLength: 1024,
  publicKeyEncoding: { type: "spki", format: "pem" }, //public key with spki tyepa and pem
  privateKeyEncoding: {
    //private key with spki tyepa and pem
    type: "pkcs8",
    format: "pem",
    //cipher: "aes-256-cbc",
    //passphrase: "top-secret",
  },
});

const msg = "hello world";
const signer = crypto.createSign("rsa-sha256"); //create sign formula and update with data
signer.update(msg);
const signature = signer.sign(privateKey, "hex"); //sign private key with signature
console.log("signature " + signature);
const verifier = crypto.createVerify("rsa-sha256"); //create verify formula and update with data
verifier.update(msg);
const isVerified = verifier.verify(publicKey, signature, "hex"); //verify signature with public key
console.log(isVerified);
