var libxmljs = require("libxmljs");
var libxmljs2 = require("libxmljs2");

module.exports.foo =  function(req, res) {

	// ruleid: express-libxml-noent
	libxmljs.parseXmlString(req.query.products, {noent:true,noblanks:true})
	// ruleid: express-libxml-noent
	libxmljs.parseXml(req.query.products, {noent:true,noblanks:true})
	// ok: express-libxml-noent
	libxmljs.parseXml(req.query.productsdata, {noent:false,noblanks:true})
	// ruleid: express-libxml-noent
	libxmljs2.parseXmlString(req.body, {noent:true,noblanks:true})
	// ruleid: express-libxml-noent
	libxmljs2.parseXml(req.body, {noent:true,noblanks:true})
	// ok: express-libxml-noent
	libxmljs2.parseXml(req.body, {noent:false,noblanks:true})
}
