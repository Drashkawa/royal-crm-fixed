const express = require('express');
const router = express.Router();
const cm = require('../controllers/customers');
const fileMgmt = require('../shared/fileMgmt');

// http://localhost:3000/customers/export

router.get('/home', function (req, res, next) {
    const filePath = fileMgmt.getHtmlFilePath('customers-home.html');
    res.sendFile(filePath);
});

router.get('/', cm.customersList);
// router.get   ('/details', cm.viewCustomerDetails);
router.get('/export', cm.exportCustomers);
// router.patch ('/', cm.updateCustomer);
router.post('/', cm.addCustomer);
// router.delete('/', cm.deleteCustomer);

module.exports = router;