const allowedColors = ["Arsenic", "Chamoisee", "Silver", "White"];

const validateColors = (req, res, next) => {
  const { colors } = req.body;

  if (!colors || !Array.isArray(colors)) {
    return res.status(400).json({ error: "Colors must be an array." });
  }

  const invalidColors = colors.filter((color) => !allowedColors.includes(color));

  if (invalidColors.length > 0) {
    return res.status(400).json({
      error: `Invalid colors: ${invalidColors.join(", ")}. Allowed colors are: ${allowedColors.join(", ")}.`,
    });
  }

  if (colors.length > 4) {
    return res.status(400).json({ error: "You can select a maximum of 4 colors." });
  }

  next(); // Continue to the next middleware or route handler
};

export default validateColors;
