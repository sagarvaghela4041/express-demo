import { Router } from 'express';
import { VendorServices } from '../services/vendor-services';

const vendorRouter = Router();
const vendorServices = new VendorServices();
vendorRouter.post('', vendorServices.saveVendor);

export { vendorRouter }