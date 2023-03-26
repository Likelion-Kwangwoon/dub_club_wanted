

const accessToken = (req, res) => {

};

const refreshToken = (req, res) => {

};

const loginSuccess = (req, res) => {
    try {
        const token = req.cookies.accessToken;
        const data = jwt.verify(token, process.env.ACCESS_SECRET);

        const userData = userDatabase.filter(item =>{
            return item.email === data.email;
        })[0];

        res.status(200).json(userData);
    } catch (error) {
        res.status(500).json(error);
    }
};

const logout = (req, res) => {

};
