var CryptoJS = require("crypto-js");
var http = require('http');
var querystring = require('querystring');
var key = '5Df8$&@S';
var iv = CryptoJS.enc.Utf8.parse(key);
var key = CryptoJS.enc.Utf8.parse(key);
module.exports = {
	tokenDes: function(token) {
		var decrypted = CryptoJS.TripleDES.decrypt(token, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		// 转换为 utf8 字符串
		decrypted = CryptoJS.enc.Utf8.stringify(decrypted);
		return decrypted;
	},
	responseDes: function(body) {
		let data = body.resText;
		data = data.replace(/[\r\n]/g, "");
		var ciphertext = CryptoJS.DES.decrypt(data, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
		if (ciphertext && typeof ciphertext == 'string') {
			return JSON.parse(ciphertext);
		}
		if (ciphertext && typeof ciphertext == 'object') {
			return ciphertext;
		}
	},
	ReleaseToken: function(data) {
		data = data.replace(/[\r\n]/g, "");
		var ciphertext = CryptoJS.DES.decrypt(data, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		ciphertext = CryptoJS.enc.Utf8.stringify(ciphertext);
		return ciphertext;
	},
	ReleaseDesToken: function(data) {
		var ciphertext = CryptoJS.TripleDES.encrypt(data, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		return ciphertext.toString();
		// return ciphertext;
	},
	responseDesNormal: function(body) {
		let data = body.resText;
		data = data.replace(/[\r\n]/g, "");
		var ciphertext = CryptoJS.DES.decrypt(data, key, {
			iv: iv,
			mode: CryptoJS.mode.CBC,
			padding: CryptoJS.pad.Pkcs7
		});
		body.resText = CryptoJS.enc.Utf8.stringify(ciphertext);
		return body;
	},
	httpPost: function(request, response, callback, host, path, redata) {
		let data = '';
		if (redata != undefined) {
			data = redata;
		} else {
			if (request.body.versionName != null) {
				data = querystring.stringify({
					token: this.tokenDes(request.body.token),
					versionName: request.body.versionName
				});
			} else {
				data = querystring.stringify({
					token: this.tokenDes(request.body.token)
				});
			}
		}
		console.log(data);
		var options = {
			hostname: host,
			path: path,
			method: 'POST',
			agent: false,
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
				'Content-Length': data.length
			}
		};
		let body = '';
		var req = http.request(options, (res) => {
			res.setEncoding('utf8');
			res.on('data', (chunk) => {
				body += chunk;
			}).on('end', (chunk) => {
				if (res.statusCode == 200) {
					let resp = JSON.parse(body);
					if (resp.isEnc == 'Y') {
						response.send(this.responseDes(resp));
					} else {
						if (typeof resp.resText == 'string') {
							response.send(JSON.parse(resp.resText));
						} else {
							response.send(resp.resText);
						}
					}
				}
			});
		});
		req.on('error', function(e) {
			if (callback) {
				callback(e, null);
			}
			console.log('problem with request: ' + e.message);
		});
		req.write(data);
		req.end();
	},
	base64decode: function(str) {
		var base64DecodeChars = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
		var c1, c2, c3, c4;
		var i, len, out;
		len = str.length;
		i = 0;
		out = "";
		while (i < len) {
			/* c1 */
			do {
				c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
			} while (i < len && c1 == -1);
			if (c1 == -1)
				break;
			/* c2 */
			do {
				c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff];
			} while (i < len && c2 == -1);
			if (c2 == -1)
				break;
			out += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));
			/* c3 */
			do {
				c3 = str.charCodeAt(i++) & 0xff;
				if (c3 == 61)
					return out;
				c3 = base64DecodeChars[c3];
			} while (i < len && c3 == -1);
			if (c3 == -1)
				break;
			out += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));
			/* c4 */
			do {
				c4 = str.charCodeAt(i++) & 0xff;
				if (c4 == 61)
					return out;
				c4 = base64DecodeChars[c4];
			} while (i < len && c4 == -1);
			if (c4 == -1)
				break;
			out += String.fromCharCode(((c3 & 0x03) << 6) | c4);
		}
		return out;
	},
	utf8to16: function(str) {
		var out, i, len, c;
		var char2, char3;
		out = "";
		len = str.length;
		i = 0;
		while (i < len) {
			c = str.charCodeAt(i++);
			switch (c >> 4) {
				case 0:
				case 1:
				case 2:
				case 3:
				case 4:
				case 5:
				case 6:
				case 7:
					// 0xxxxxxx
					out += str.charAt(i - 1);
					break;
				case 12:
				case 13:
					// 110x xxxx   10xx xxxx
					char2 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x1F) << 6) | (char2 & 0x3F));
					break;
				case 14:
					// 1110 xxxx  10xx xxxx  10xx xxxx
					char2 = str.charCodeAt(i++);
					char3 = str.charCodeAt(i++);
					out += String.fromCharCode(((c & 0x0F) << 12) | ((char2 & 0x3F) << 6) | ((char3 & 0x3F) << 0));
					break;
			}
		}
		return out;
	},
	getUser: function(request, response, callback) {
		let data = querystring.stringify({
			token: this.tokenDes(request.body.token)
		});
		let dataArr = data.split('=');
		let token = this.utf8to16(this.base64decode(dataArr[1]));
		if(token==''){
			response.send({token: false})
			return false;
		}
		var tokenArr = token.split("_");
		var userInfo = {
			id: tokenArr[2],
			salt: tokenArr[3]
		}
		var flag = userInfo;
		var mysql = require("mysql"); //调用MySQL模块
		var DATABASE = "ppmiao_test";
		var TABLE = "s_user";
		var connection = mysql.createConnection({host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com', user: 'pptang_123', password: 'E8b9J7TjPs0u4Nf', port: '3306'});
		connection.connect();
		connection.query('use ' + DATABASE);
		connection.query('select salt from ' + TABLE +' where id=' + userInfo.id, function(error, results, fields) {
			if (error) {
				throw error;
			}
			if (results) {
				if(!userInfo.salt == results[0].salt){
					flag = {token: "false"};
				}
			}
		});
		connection.end();
		return flag;
	},
	// link: function() {
	// 	var mysql = require("mysql"); //调用MySQL模块
	// 	var DATABASE = "ppmiao_test";
	// 	var TABLE = "s_user";
	// 	var connection = mysql.createConnection({host: 'rm-uf6s86ucfa1mvy1m8o.mysql.rds.aliyuncs.com', user: 'pptang_123', password: 'E8b9J7TjPs0u4Nf', port: '3306'});
	// 	connection.connect();
	// 	connection.query('use ' + DATABASE);
	// 	connection.query('select salt from ' + TABLE, function(error, results, fields) {
	// 		if (error) {
	// 			throw error;
	// 		}
	// 		if (results) {
	// 			// for (var i = 0; i < results.length; i++) {
	// 			// 	console.log('%s\t%s', results[i].name, results[i].end_time);
	// 			// }
	// 			// console.log('%s\t%s', results[1].user_id, results[1].repay_id);
	// 			console.log(results);
	// 		}
	// 	});
	//
	// 	connection.end();
	// }
};
