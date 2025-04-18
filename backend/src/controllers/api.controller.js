class ApiController {
    // Health check
    static async healthCheck(req, res) {
        try {
            res.json({ status: 'healthy' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    // Hello message
    static async getHello(req, res) {
        try {
            res.json({ message: 'Hello from the backend!' });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = ApiController;
