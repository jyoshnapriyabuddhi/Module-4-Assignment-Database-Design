
const loanledger = require('../model/loanledgerModel')
const APIFeatures = require('../databaseManager/loanledgerDbContext.js');

exports.getAllloanledgers =   async (req, res) => {
    try {
      // EXECUTE QUERY
      const features = new APIFeatures(loanledger.find(), req.query)
        .filter()
        .sort()
        .limitFields()
        .paginate();
      const loanledgers = await features.query;
  
      // SEND RESPONSE
      res.status(200).json({
        status: 'success',
        results: loanledgers.length,
        data: {
           loanledgers
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.createloanledger = async  (req, res) => {
    try {

      const newloanledgers = await loanledger.create(req.body);
  
      res.status(201).json({
        status: 'success',
        data: {
          loanledger: newloanledgers
        }
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.updateloanledger = async (req, res) => {
    try {
      const loanledgers = await loanledger.findByIdAndUpdate(req.params.id,req.body.id, {
        new: true,
        runValidators: true
      });
  
      res.status(200).json({
        status: 'success',
        data: {
          loanledgers
        }
      });
    } catch (err) {
      res.status(404).json({
        status: 'fail',
        message: err
      });
    }
  };

  exports.deleteloanledger = async (req, res) => {
    try {
      await loanledger.findByIdAndDelete(req.params.id);
  
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