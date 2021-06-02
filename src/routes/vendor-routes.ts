import { Router } from 'express';
import { authentication } from '../middlewares/user-authentication';
import { VendorServices } from '../services/vendor-service';

const vendorRouter = Router();
const vendorServices = new VendorServices();
vendorRouter.post('', authentication, vendorServices.saveVendor);
vendorRouter.put('/:id', authentication, vendorServices.updateFullVendor);
vendorRouter.delete('/:id', authentication, vendorServices.deleteVendor);
vendorRouter.get('/:id', authentication, vendorServices.getVendor);
vendorRouter.patch('/:id', authentication, vendorServices.updateVendor);
vendorRouter.post('/search', authentication, vendorServices.searchVendor);
export { vendorRouter }