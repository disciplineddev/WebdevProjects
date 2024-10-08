export const register = async (req, res) => {
  try {
    // validation
    const { name, password } = req.body;
    if (!name) {
      return res.json({
        error: "Name is required",
      });
    }
    if (!password || password.length < 6) {
      return res.json({
        error: "Password is required and should be 6 characters long",
      });
    }
    res.json({
      data: "This is /register endpoint",
    });
  } catch (err) {
    console.log(err);
  }
};
