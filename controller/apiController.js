const Apis = require("../models/apiModel");

exports.create = async (req, res) => {
  try {
    const api = await Apis.create(req.body);
    res.status(201).json(api);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const apis = await Apis.find({});
    res.status(200).json(apis);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    const api = await Apis.findByIdAndUpdate(id, req.body, { new: true });

    if (!api) {
      return res.status(404).json({ message: `Cannot find API with ID ${id}` });
    }

    res.status(200).json(api);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getBySystemName = async (req, res) => {
  try {
    const { systemname } = req.params;
    const api = await Apis.find({ systemname });

    if (api.length === 0) {
      return res.status(404).json({ message: `No API with system name ${systemname} found` });
    }

    res.status(200).json(api);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getByDescription = async (req, res) => {
  try {
    const { description } = req.params;
    const api = await Apis.find({ description });

    if (api.length === 0) {
      return res.status(404).json({ message: `No API with description ${description} found` });
    }

    res.status(200).json(api);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};
