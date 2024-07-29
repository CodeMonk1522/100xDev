const { z } = require('zod');

const authSchema = z.object({
    username: z.string(),
    password: z.string()
});

function auth(req, res, next) {
    const headers = {
        username: req.headers.username,
        password: req.headers.password
    };

    const result = authSchema.safeParse(headers);

    if (!result.success) {
        return res.status(400).json({ message: 'Invalid headers format' });
    }

    const { username, password } = result.data;

    if (username === 'Shubham' && password === 'Shubham@1522') {
        next();
    } else {
        res.status(404).json({ message: 'Login UnSuccessful!' });
    }
}

module.exports = { auth };