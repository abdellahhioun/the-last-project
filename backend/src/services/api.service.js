class ApiService {
    static async getHealthStatus() {
        return { status: 'healthy' };
    }

    static async getHelloMessage() {
        return { message: 'Hello from the backend!' };
    }
}

module.exports = ApiService;
