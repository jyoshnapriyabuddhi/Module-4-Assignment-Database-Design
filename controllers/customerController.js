const Customer = require('./../model/customerModel');
const APIFeatures = require('../databaseManager/customerDbContext.JS');

//get all customers
exports.getAllcustomers =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(Customer.find(), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const customers = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: customers.length,
      data: {
        customers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};
// get customer by id
exports.getcustomer = async (req, res) => {
  try {
    const tour = await Customer.findById(req.params.id);
    // Customer.findOne({ _id: req.params.id })

    res.status(200).json({
      status: 'success',
      data: {
        tour
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

exports.createcustomer = async  (req, res) => {
  try {
    // const newCustomer = new Customer({})
    // newCustomer.save()

    const newCustomer = await Customer.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        customer: newCustomer
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//update customer 
exports.updatecustomer = async (req, res) => {
  try {
    const customers = await Customer.findByIdAndUpdate(req.params.id, {$push:{LOANLEDGERID: req.body.LOANLEDGERID}}, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        customers
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

//delete customer
exports.deletecustomer = async (req, res) => {
  try {
    await Customer.findByIdAndDelete(req.params.id);

    res.status(204).json({
      status: 'success',
      data: null
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

//**Code  END