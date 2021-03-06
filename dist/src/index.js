"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var database_service_1 = require("./services/database-service");
var body_parser_1 = require("body-parser");
var registration_routes_1 = require("./routes/registration-routes");
var dotenv = __importStar(require("dotenv"));
var error_handler_1 = require("./middlewares/error-handler");
var category_routes_1 = require("./routes/category-routes");
var routes_1 = require("./routes/routes");
var error_routes_1 = require("./routes/error-routes");
var vendor_routes_1 = require("./routes/vendor-routes");
var product_routes_1 = require("./routes/product-routes");
var swaggerUi = __importStar(require("swagger-ui-express"));
var swaggerDocument = __importStar(require("../swagger.json"));
var cookie_parser_1 = __importDefault(require("cookie-parser"));
dotenv.config();
var app = express_1.default();
database_service_1.database_connection();
app.use(body_parser_1.json());
app.use(cookie_parser_1.default());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use(registration_routes_1.router);
app.use(error_routes_1.errorRouter);
app.use(routes_1.generalRouter);
app.use(category_routes_1.categoryRouter);
app.use(vendor_routes_1.vendorRouter);
app.use(product_routes_1.productRouter);
app.use(error_handler_1.errorHandler);
app.listen("" + process.env.PORT, function () { return console.log("Server started on port: " + process.env.PORT); });
