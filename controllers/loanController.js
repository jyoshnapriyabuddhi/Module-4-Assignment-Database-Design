const loan = require('./../model/loanModel');
const APIFeatures = require('../dataBaseManager/loanDbContext');

//get all loans
exports.getAllloans =   async (req, res) => {
  try {
    // EXECUTE QUERY
    const features = new APIFeatures(loan.find().populate('CUSTOMER'), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();
    const loans = await features.query;

    // SEND RESPONSE
    res.status(200).json({
      status: 'success',
      results: loans.length,
      data: {
        loans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

//get loans by id
exports.getloan = async (req, res) => {
  try {
    const tour = await loan.findById(req.params.id);

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

//create new loans
exports.createloan = async  (req, res) => {
  try {
    const newloan = await loan.create(req.body);

    res.status(201).json({
      status: 'success',
      data: {
        loan: newloan
      }
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: err
    });
  }
};

//update loans
exports.updateloan = async (req, res) => {
  try {
    const loans = await loan.findByIdAndUpdate(req.params.id, {$push:{CUSTOMER: req.body.CUSTOMER}}, {
      new: true,
      runValidators: true
    });

    res.status(200).json({
      status: 'success',
      data: {
        loans
      }
    });
  } catch (err) {
    res.status(404).json({
      status: 'fail',
      message: err
    });
  }
};

//delete loans
exports.deleteloan = async (req, res) => {
  try {
    await loan.findByIdAndDelete(req.params.id);

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